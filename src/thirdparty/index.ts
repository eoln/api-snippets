/* eslint-disable @typescript-eslint/no-namespace */

import { components } from './openapi'
export * as openapi from './openapi'

export namespace Schemas {
  export type Account = components['schemas']['Account']
  export type AccountId = components['schemas']['AccountId']
  export type AccountList = components['schemas']['AccountList']
  export type AccountsIDPutResponse = components['schemas']['AccountsIDPutResponse']
  export type Amount = components['schemas']['Amount']
  export type AmountType = components['schemas']['AmountType']
  export type AuthenticationType = components['schemas']['AuthenticationType']
  export type AuthorizationChannelType = components['schemas']['AuthorizationChannelType']
  export type AuthorizationResponseType = components['schemas']['AuthorizationResponseType']
  export type AuthorizationsPostRequest = components['schemas']['AuthorizationsPostRequest']
  export type BalanceOfPayments = components['schemas']['BalanceOfPayments']
  export type BinaryString = components['schemas']['BinaryString']
  export type ConsentRequestChannelType = components['schemas']['ConsentRequestChannelType']
  export type ConsentRequestChannelTypeOTP = components['schemas']['ConsentRequestChannelTypeOTP']
  export type ConsentRequestChannelTypeWeb = components['schemas']['ConsentRequestChannelTypeWeb']
  export type ConsentRequestsIDPatchRequest = components['schemas']['ConsentRequestsIDPatchRequest']
  export type AuthorizationsIDPutResponse = components['schemas']['AuthorizationsIDPutResponse']
  export type ConsentRequestsIDPutResponseOTP = components['schemas']['ConsentRequestsIDPutResponseOTP']
  export type ConsentRequestsIDPutResponseWeb = components['schemas']['ConsentRequestsIDPutResponseWeb']
  export type ConsentRequestsPostRequest = components['schemas']['ConsentRequestsPostRequest']
  export type ConsentScopeType = components['schemas']['ConsentScopeType']
  export type ConsentsIDGenerateChallengePostRequest = components['schemas']['ConsentsIDGenerateChallengePostRequest']
  export type ConsentsIDPatchResponseRevoked = components['schemas']['ConsentsIDPatchResponseRevoked']
  export type ConsentsIDPatchResponseVerified = components['schemas']['ConsentsIDPatchResponseVerified']
  export type ConsentsIDPutResponseSigned = components['schemas']['ConsentsIDPutResponseSigned']
  export type ConsentsIDPutResponseVerified = components['schemas']['ConsentsIDPutResponseVerified']
  export type ConsentsPostRequest = components['schemas']['ConsentsPostRequest']
  export type ConsentStatusTypeRevoked = components['schemas']['ConsentStatusTypeRevoked']
  export type ConsentStatusTypeVerified = components['schemas']['ConsentStatusTypeVerified']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type CredentialType = components['schemas']['CredentialType']
  export type Currency = components['schemas']['Currency']
  export type DateOfBirth = components['schemas']['DateOfBirth']
  export type DateTime = components['schemas']['DateTime']
  export type ErrorCode = components['schemas']['ErrorCode']
  export type ErrorDescription = components['schemas']['ErrorDescription']
  export type ErrorInformation = components['schemas']['ErrorInformation']
  export type ErrorInformationResponse = components['schemas']['ErrorInformationResponse']
  export type Extension = components['schemas']['Extension']
  export type ExtensionKey = components['schemas']['ExtensionKey']
  export type ExtensionList = components['schemas']['ExtensionList']
  export type ExtensionValue = components['schemas']['ExtensionValue']
  export type FirstName = components['schemas']['FirstName']
  export type FspId = components['schemas']['FspId']
  export type GeoCode = components['schemas']['GeoCode']
  export type IlpCondition = components['schemas']['IlpCondition']
  export type IlpFulfilment = components['schemas']['IlpFulfilment']
  export type IlpPacket = components['schemas']['IlpPacket']
  export type Integer = components['schemas']['Integer']
  export type LastName = components['schemas']['LastName']
  export type Latitude = components['schemas']['Latitude']
  export type Longitude = components['schemas']['Longitude']
  export type MerchantClassificationCode = components['schemas']['MerchantClassificationCode']
  export type MiddleName = components['schemas']['MiddleName']
  export type Money = components['schemas']['Money']
  export type Name = components['schemas']['Name']
  export type Note = components['schemas']['Note']
  export type ParticipantsPostRequest = components['schemas']['ParticipantsPostRequest']
  export type PartiesTypeIDPutResponse = components['schemas']['PartiesTypeIDPutResponse']
  export type Party = components['schemas']['Party']
  export type PartyComplexName = components['schemas']['PartyComplexName']
  export type PartyIdentifier = components['schemas']['PartyIdentifier']
  export type PartyIdInfo = components['schemas']['PartyIdInfo']
  export type PartyIdInfoTPLink = components['schemas']['PartyIdInfoTPLink']
  export type PartyIdType = components['schemas']['PartyIdType']
  export type PartyIdTypeTPLink = components['schemas']['PartyIdTypeTPLink']
  export type PartyName = components['schemas']['PartyName']
  export type PublicKeyCredential = components['schemas']['PublicKeyCredential']
  export type PartyPersonalInfo = components['schemas']['PartyPersonalInfo']
  export type PartyResult = components['schemas']['PartyResult']
  export type PartySubIdOrType = components['schemas']['PartySubIdOrType']
  export type QuotesIDPutResponse = components['schemas']['QuotesIDPutResponse']
  export type Refund = components['schemas']['Refund']
  export type RefundReason = components['schemas']['RefundReason']
  export type Scope = components['schemas']['Scope']
  export type ServicesServiceTypePutResponse = components['schemas']['ServicesServiceTypePutResponse']
  export type ServiceType = components['schemas']['ServiceType']
  export type SignedCredential = components['schemas']['SignedCredential']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest']
  export type ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse = components['schemas']['ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse']
  export type ThirdpartyRequestsTransactionsIDPatchResponse = components['schemas']['ThirdpartyRequestsTransactionsIDPatchResponse']
  export type ThirdpartyRequestsTransactionsIDPutResponse = components['schemas']['ThirdpartyRequestsTransactionsIDPutResponse']
  export type ThirdpartyRequestsTransactionsPostRequest = components['schemas']['ThirdpartyRequestsTransactionsPostRequest']
  export type TransactionInitiator = components['schemas']['TransactionInitiator']
  export type TransactionInitiatorType = components['schemas']['TransactionInitiatorType']
  export type TransactionRequestsPostRequest = components['schemas']['TransactionRequestsPostRequest']
  export type TransactionRequestState = components['schemas']['TransactionRequestState']
  export type TransactionScenario = components['schemas']['TransactionScenario']
  export type TransactionState = components['schemas']['TransactionState']
  export type TransactionSubScenario = components['schemas']['TransactionSubScenario']
  export type TransactionType = components['schemas']['TransactionType']
  export type VerifiedCredential = components['schemas']['VerifiedCredential']
}
