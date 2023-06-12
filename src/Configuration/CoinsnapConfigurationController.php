<?php

declare(strict_types=1);

/**
 * Copyright (c) 2022 Coincharge
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Author: Coincharge<shopware@coincharge.io>
 */

namespace Coincharge\Shopware\Configuration;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Coincharge\Shopware\Client\ClientInterface;
use Coincharge\Shopware\Configuration\ConfigurationService;
use Coincharge\Shopware\Webhook\WebhookServiceInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Coincharge\Shopware\PaymentMethod\{LightningPaymentMethod, BitcoinPaymentMethod};

/**
 * @Route(defaults={"_routeScope"={"api"}})
 */

class CoinsnapConfigurationController extends ConfigurationController
{
  private ClientInterface $client;
  private ConfigurationService $configurationService;
  private WebhookServiceInterface $webhookService;

  public function __construct(ClientInterface $client, ConfigurationService $configurationService, WebhookServiceInterface $webhookService)
  {
    $this->client = $client;
    $this->configurationService = $configurationService;
    $this->webhookService = $webhookService;
  }

  /**
   * @Route("/api/_action/coincharge/coinsnap_verify", name="api.action.coincharge.coinsnap_verify", methods={"GET"})
   */
  public function verifyApiKey(Request $request, Context $context)
  {
    $uri = '/api/v1/websites/' . $this->configurationService->getSetting('coinsnapWebsiteId');

    $response = $this->client->sendGetRequest($uri);
    if (!is_array($response)) {
      $this->configurationService->setSetting('coinsnapIntegrationStatus', false);
      return new JsonResponse(['success' => false, 'message' => 'Check server url and API key.']);
    }
    if (!$this->webhookService->register($request, null)) {
      $this->configurationService->setSetting('coinsnapIntegrationStatus', false);
      return new JsonResponse(['success' => false, 'message' => "There is a temporary problem with BTCPay Server. A webhook can't be created at the moment. Please try later."]);
    }
    $this->configurationService->setSetting('coinsnapIntegrationStatus', true);
    return new JsonResponse(['success' => true]);
  }
}
