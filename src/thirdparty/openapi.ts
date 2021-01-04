/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /**
     * A valid OpenApi3 specification requires `paths` to be defined.
     */
    get: {
      responses: {
        /**
         * OK
         */
        '200': unknown;
      };
    };
  };
}

export interface operations {}

export interface components {
  schemas: {
    /**
     * Data model for the complex type Account.
     */
    Account: {
      address?: components['schemas']['AccountAddress'];
      currency: components['schemas']['Currency'];
      description?: components['schemas']['Name'];
    };
    /**
     * A long-lived unique account identifier provided by the DFSP. This MUST NOT
     * be Bank Account Number or anything that may expose a User's private bank
     * account information.
     */
    AccountAddress: string;
    /**
     * Data model for the complex type AccountList.
     */
    AccountList: {
      /**
       * Accounts associated with the Party.
       */
      account: components['schemas']['Account'][];
    };
    /**
     * Below are the allowed values for the enumeration AuthorizationChannelType.
     * - OTP - One-time password generated by the Payer FSP.
     * - QRCODE - QR code used as One Time Password.
     * - U2F - U2F is a new addition isolated to Thirdparty stream.
     *
     * This is based on FSPIOP `AuthenticationType` with U2F added.
     */
    AuthorizationChannelType: 'OTP' | 'QRCODE' | 'U2F';
    /**
     * Enum containing response information; if the customer entered the
     * authentication value, rejected the transaction, or requested a
     * resend of the authentication value.
     */
    AuthorizationResponseType: 'ENTERED' | 'REJECTED' | 'RESEND';
    /**
     * POST /authorizations request object.
     */
    AuthorizationsPostRequest: {
      authenticationType: components['schemas']['AuthorizationChannelType'];
      retriesLeft: components['schemas']['Integer'];
      amount: components['schemas']['Money'];
      transactionId: components['schemas']['CorrelationId'];
      transactionRequestId: components['schemas']['CorrelationId'];
      quote: components['schemas']['QuotesIDPutResponse'];
    };
    /**
     * The API data type BinaryString is a JSON String.
     * The string is a base64url  encoding of a string of raw bytes,
     * where padding (character ‘=’) is added at the end of the data if
     * needed to ensure that the string is a multiple of 4 characters.
     * The length restriction indicates the allowed number of characters.
     */
    BinaryString: string;
    /**
     * The auth channel being used for the consentRequest.
     * - "WEB" - The Web auth channel.
     * - "OTP" - The OTP auth channel.
     */
    ConsentRequestChannelType: 'WEB' | 'OTP';
    /**
     * The OTP auth channel being used for PUT consentRequest/{ID} request.
     */
    ConsentRequestChannelTypeOTP: 'OTP';
    /**
     * The web auth channel being used for PUT consentRequest/{ID} request.
     */
    ConsentRequestChannelTypeWeb: 'WEB';
    /**
     * The object sent in a `PUT /consentRequests/{ID}` request.
     *
     * Schema used in the request consent phase of the account linking OTP/SMS flow.
     */
    ConsentRequestsIDPutResponseOTP: {
      /**
       * The id of the PISP who will initiate transactions on a user's behalf.
       */
      initiatorId: string;
      scopes: components['schemas']['Scope'][];
      authChannels: components['schemas']['ConsentRequestChannelTypeOTP'][];
      /**
       * The callback uri that the user will be redirected to after completing the WEB auth channel.
       */
      callbackUri: string;
    };
    /**
     * The object sent in a `PUT /consentRequests/{ID}` request.
     *
     * Schema used in the authentication phase of the account linking flow,
     * the user is expected to prove their identity to the DFSP by passing a OTP
     * or secret to the PISP.
     */
    ConsentRequestsIDPutResponseOTPAuth: {
      /**
       * The id of the PISP who will initiate transactions on a user's behalf.
       */
      initiatorId: string;
      scopes: components['schemas']['Scope'][];
      authChannels: components['schemas']['ConsentRequestChannelTypeOTP'][];
      /**
       * The callback uri that the user will be redirected to after completing the WEB auth channel.
       */
      callbackUri: string;
      /**
       * The Auth token from the OTP or redirect to pisp app.
       */
      authToken: string;
    };
    /**
     * The object sent in a `PUT /consentRequests/{ID}` request.
     *
     * Schema used in the request consent phase of the account linking web flow,
     * the result is the PISP being instructed on a specific URL where this
     * supposed user should be redirected. This URL should be a place where
     * the user can prove their identity (e.g., by logging in).
     */
    ConsentRequestsIDPutResponseWeb: {
      /**
       * The id of the PISP who will initiate transactions on a user's behalf.
       */
      initiatorId: string;
      scopes: components['schemas']['Scope'][];
      authChannels: components['schemas']['ConsentRequestChannelTypeWeb'][];
      /**
       * The callback uri that the user will be redirected to after completing the WEB auth channel.
       */
      callbackUri: string;
      /**
       * The callback uri that the pisp app redirects to for user to complete their login.
       */
      authUri: string;
    };
    /**
     * The object sent in a `PUT /consentRequests/{ID}` request.
     *
     * Schema used in the authentication phase of the account linking flow,
     * the user is expected to prove their identity to the DFSP by passing a OTP
     * or secret to the PISP.
     */
    ConsentRequestsIDPutResponseWebAuth: {
      /**
       * The id of the PISP who will initiate transactions on a user's behalf.
       */
      initiatorId: string;
      scopes: components['schemas']['Scope'][];
      authChannels: components['schemas']['ConsentRequestChannelTypeWeb'][];
      /**
       * The callback uri that the user will be redirected to after completing the WEB auth channel.
       */
      callbackUri: string;
      /**
       * The callback uri that the pisp app redirects to for user to complete their login.
       */
      authUri: string;
      /**
       * The Auth token from the OTP or redirect to pisp app.
       */
      authToken: string;
    };
    /**
     * The object sent in a `POST /consentRequests` request.
     */
    ConsentRequestsPostRequest: {
      id: components['schemas']['CorrelationId'];
      /**
       * The id of the PISP who will initiate transactions on a user's behalf.
       */
      initiatorId: string;
      scopes: components['schemas']['Scope'][];
      authChannels: components['schemas']['ConsentRequestChannelType'][];
      /**
       * The callback uri that the user will be redirected to after completing the WEB auth channel.
       */
      callbackUri: string;
    };
    /**
     * The scopes requested for a ConsentRequest.
     * - "accounts.getBalance" - Get the balance of a given account.
     * - "accounts.transfer" - Initiate a transfer from an account.
     */
    ConsentScopeType: 'accounts.getBalance' | 'accounts.transfer';
    /**
     * A credential used to allow a user to prove their identity
     * and access to an account with a DFSP.
     */
    ConsentsIDGenerateChallengePostRequest: {
      type: components['schemas']['CredentialType'];
    };
    /**
     * PATCH /consents/{ID} request object.
     *
     * Sent to both the PISP and DFSP when a consent is revoked.
     */
    ConsentsIDPatchResponse: {
      status: components['schemas']['ConsentStatusType'];
      revokedAt: components['schemas']['DateTime'];
    };
    /**
     * The HTTP request `PUT /consents/{ID}` is used by the PISP to update a Consent
     * with a signed challenge and register a credential.
     *
     * Called by a `PISP` to after signing a challenge. Sent to an `auth-service` for verification.
     */
    ConsentsIDPutResponseSigned: {
      /**
       * The id of the ConsentRequest that was used to initiate the
       * creation of this Consent.
       */
      requestId: components['schemas']['CorrelationId'];
      participantId: components['schemas']['FspId'];
      /**
       * PISP identifier who uses this Consent.
       */
      initiatorId: components['schemas']['FspId'];
      scopes: components['schemas']['Scope'][];
      credential: components['schemas']['SignedCredential'];
    };
    /**
     * The HTTP request `PUT /consents/{ID}` is used to request a PISP to sign a challenge.
     * The `{ID}` in the URI should contain the `{ID}` that was used in the `POST /consents`.
     *
     * Called by a `auth-service` to request PISP to add the credential details.
     */
    ConsentsIDPutResponseUnsigned: {
      /**
       * The id of the ConsentRequest that was used to initiate the
       * creation of this Consent.
       */
      requestId: components['schemas']['CorrelationId'];
      participantId: components['schemas']['FspId'];
      /**
       * PISP identifier who uses this Consent.
       */
      initiatorId: components['schemas']['FspId'];
      scopes: components['schemas']['Scope'][];
      credential: components['schemas']['UnsignedCredential'];
    };
    /**
     * The HTTP request `PUT /consents/{ID}` is used by the DFSP or Auth-Service to
     * update a Consent object once it has been Verified.
     *
     * Called by a `auth-service` to notify a DFSP and PISP that a credential has been verified and registered.
     */
    ConsentsIDPutResponseVerified: {
      /**
       * The id of the ConsentRequest that was used to initiate the
       * creation of this Consent.
       */
      requestId: components['schemas']['CorrelationId'];
      participantId: components['schemas']['FspId'];
      /**
       * PISP identifier who uses this Consent.
       */
      initiatorId: components['schemas']['FspId'];
      scopes: components['schemas']['Scope'][];
      credential: components['schemas']['VerifiedCredential'];
    };
    /**
     * The object sent in a `POST /consents` request.
     */
    ConsentsPostRequest: {
      /**
       * Common ID between the PISP and FSP for the Consent object
       * decided by the DFSP who creates the Consent
       * This field is REQUIRED for POST /consent.
       */
      id: components['schemas']['CorrelationId'];
      /**
       * The id of the ConsentRequest that was used to initiate the
       * creation of this Consent.
       */
      requestId?: components['schemas']['CorrelationId'];
      participantId: components['schemas']['FspId'];
      /**
       * PISP identifier who uses this Consent.
       */
      initiatorId: components['schemas']['FspId'];
      revokedAt?: components['schemas']['DateTime'];
      scopes: components['schemas']['Scope'][];
    };
    /**
     * The status of the Consent.
     * - "REVOKED" - The Consent is no longer valid and has been revoked.
     */
    ConsentStatusType: 'REVOKED';
    /**
     * Identifier that correlates all messages of the same sequence.
     * The API data type UUID (Universally Unique Identifier) is a JSON String
     * in canonical format, conforming to [RFC 4122](https://tools.ietf.org/html/rfc4122),
     * that is restricted by a regular expression for interoperability reasons.
     * A UUID is always 36 characters long, 32 hexadecimal symbols and 4 dashes (‘-‘).
     */
    CorrelationId: string;
    /**
     * The currency codes defined in
     * [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)
     * as three-letter alphabetic codes are used as the standard naming representation for currencies.
     */
    Currency:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SPL'
    | 'SRD'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TVD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XDR'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWD';
    /**
     * The challenge that has been signed by a PISP.
     */
    CredentialChallengeSigned: {
      /**
       * Base64 encoded binary of the challenge that must be answered by the PISP.
       */
      payload: string;
      /**
       * Base64 encoded binary string or result of the payload signed by the PISP using the private key.
       */
      signature: string;
    };
    /**
     * The challenge issued by a DFSP that must be answered by the PISP.
     */
    CredentialChallengeUnsigned: {
      /**
       * Base64 encoded binary of the challenge that must be answered by the PISP.
       */
      payload: string;
    };
    /**
     * The type of the Credential.
     * - "FIDO" - A FIDO public/private keypair.
     */
    CredentialType: 'FIDO';
    /**
     * The API data type DateTime is a JSON String in a lexical format that is
     * restricted by a regular expression for interoperability reasons.
     * The format is according to
     * [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html),
     * expressed in a combined date, time and time zone format.
     * A more readable version of the format is yyyy-MM-ddTHH:mm:ss.SSS[-HH:MM].
     * Examples are \"2016-05-24T08:38:08.699-04:00\", \"2016-05-24T08:38:08.699Z\"
     * (where Z indicates Zulu time zone, same as UTC).
     */
    DateTime: string;
    /**
     * FSP identifier.
     */
    FspId: string;
    /**
     * The API data type Integer is a JSON String consisting of digits only.
     * Negative numbers and leading zeroes are not allowed.
     * The data type is always limited to a specific number of digits.
     */
    Integer: string;
    /**
     * Data model for the complex type Money.
     */
    Money: {
      currency: components['schemas']['Currency'];
      /**
       * The API data type Amount is a JSON String in a canonical format that is
       * restricted by a regular expression for interoperability reasons.
       * This pattern does not allow any trailing zeroes at all, but allows an amount
       * without a minor currency unit. It also only allows four digits in the minor
       * currency unit; a negative value is not allowed. Using more than 18 digits
       * in the major currency unit is not allowed.
       */
      amount: string;
    };
    /**
     * The API data type Name is a JSON String, restricted by a regular expression
     * to avoid characters which are generally not used in a name.
     * Regular Expression - The regular expression for restricting the
     * Name type is \"^(?!\\s*$)[\\w .,'-]{1,128}$\". The restriction does not
     * allow a string consisting of whitespace only, all Unicode characters are
     * allowed, as well as the period (.) (apostrophe (‘), dash (-), comma (,)
     * and space characters ( ).
     * **Note:** In some programming languages,
     * Unicode support must be specifically enabled. For example, if Java is used,
     * the flag UNICODE_CHARACTER_CLASS must be enabled to allow Unicode characters.
     */
    Name: string;
    /**
     * The object sent in the PUT /parties/{Type}/{ID} callback.
     *
     * This is a variant based on FSPIOP `PartiesTypeIDPutResponse` specification.
     * Main difference being that it returns a `Party` with the newly added
     * `accounts` property.
     */
    PartiesTypeIDPutResponse: { party: components['schemas']['Party'] };
    /**
     * Data model for the complex type Party.
     */
    Party: {
      /**
       * Data model for the complex type PartyIdInfo.
       */
      partyIdInfo: {
        /**
         * Below are the allowed values for the enumeration.
         * - MSISDN - An MSISDN (Mobile Station International Subscriber Directory
         * Number, that is, the phone number) is used as reference to a participant.
         * The MSISDN identifier should be in international format according to the
         * [ITU-T E.164 standard](https://www.itu.int/rec/T-REC-E.164/en).
         * Optionally, the MSISDN may be prefixed by a single plus sign, indicating the
         * international prefix.
         * - EMAIL - An email is used as reference to a
         * participant. The format of the email should be according to the informational
         * [RFC 3696](https://tools.ietf.org/html/rfc3696).
         * - PERSONAL_ID - A personal identifier is used as reference to a participant.
         * Examples of personal identification are passport number, birth certificate
         * number, and national registration number. The identifier number is added in
         * the PartyIdentifier element. The personal identifier type is added in the
         * PartySubIdOrType element.
         * - BUSINESS - A specific Business (for example, an organization or a company)
         * is used as reference to a participant. The BUSINESS identifier can be in any
         * format. To make a transaction connected to a specific username or bill number
         * in a Business, the PartySubIdOrType element should be used.
         * - DEVICE - A specific device (for example, a POS or ATM) ID connected to a
         * specific business or organization is used as reference to a Party.
         * For referencing a specific device under a specific business or organization,
         * use the PartySubIdOrType element.
         * - ACCOUNT_ID - A bank account number or FSP account ID should be used as
         * reference to a participant. The ACCOUNT_ID identifier can be in any format,
         * as formats can greatly differ depending on country and FSP.
         * - IBAN - A bank account number or FSP account ID is used as reference to a
         * participant. The IBAN identifier can consist of up to 34 alphanumeric
         * characters and should be entered without whitespace.
         * - ALIAS An alias is used as reference to a participant. The alias should be
         * created in the FSP as an alternative reference to an account owner.
         * Another example of an alias is a username in the FSP system.
         * The ALIAS identifier can be in any format. It is also possible to use the
         * PartySubIdOrType element for identifying an account under an Alias defined
         * by the PartyIdentifier.
         */
        partyIdType:
        | 'MSISDN'
        | 'EMAIL'
        | 'PERSONAL_ID'
        | 'BUSINESS'
        | 'DEVICE'
        | 'ACCOUNT_ID'
        | 'IBAN'
        | 'ALIAS';
        /**
         * Identifier of the Party.
         */
        partyIdentifier: string;
        /**
         * Either a sub-identifier of a PartyIdentifier, or a sub-type of the
         * PartyIdType, normally a PersonalIdentifierType.
         */
        partySubIdOrType?: string;
        fspId?: components['schemas']['FspId'];
      };
      /**
       * A limited set of pre-defined numbers. This list would be a limited set of
       * numbers identifying a set of popular merchant types like School Fees,
       * Pubs and Restaurants, Groceries, etc.
       */
      merchantClassificationCode?: string;
      /**
       * Name of the Party. Could be a real name or a nickname.
       */
      name?: string;
      /**
       * Data model for the complex type PartyPersonalInfo.
       */
      personalInfo?: {
        /**
         * Data model for the complex type PartyComplexName.
         */
        complexName?: {
          /**
           * First name of the Party (Name Type).
           */
          firstName?: string;
          /**
           * Middle name of the Party (Name Type).
           */
          middleName?: string;
          /**
           * Last name of the Party (Name Type).
           */
          lastName?: string;
        };
        /**
         * Date of Birth of the Party.
         */
        dateOfBirth?: string;
      };
    };
    /**
     * The object sent in the PUT /quotes/{ID} callback.
     */
    QuotesIDPutResponse: {
      transferAmount: components['schemas']['Money'];
      payeeReceiveAmount?: components['schemas']['Money'];
      payeeFspFee?: components['schemas']['Money'];
      payeeFspCommission?: components['schemas']['Money'];
      expiration: components['schemas']['DateTime'];
      /**
       * Data model for the complex type GeoCode.
       * Indicates the geographic location from where the transaction was initiated.
       */
      geoCode?: {
        /**
         * The API data type Latitude is a JSON String in a lexical format that is
         * restricted by a regular expression for interoperability reasons.
         */
        latitude: string;
        /**
         * The API data type Longitude is a JSON String in a lexical format that
         * is restricted by a regular expression for interoperability reasons.
         */
        longitude: string;
      };
      /**
       * Information for recipient (transport layer information).
       */
      ilpPacket: string;
      /**
       * Condition that must be attached to the transfer by the Payer.
       */
      condition: string;
      /**
       * Data model for the complex type ExtensionList.
       * An optional list of extensions, specific to deployment.
       */
      extensionList?: {
        /**
         * Number of Extension elements.
         */
        extension: {
          /**
           * Extension key.
           */
          key: string;
          /**
           * Extension value.
           */
          value: string;
        }[];
      };
    };
    /**
     * Scope + Account Identifier mapping for a Consent.
     */
    Scope: {
      accountId: components['schemas']['AccountAddress'];
      actions: components['schemas']['ConsentScopeType'][];
    };
    /**
     * A credential used to allow a user to prove their identity and access
     * to an account with a DFSP.
     *
     * SignedCredential is a special formatting of the credential to allow us to be
     * more explicit about the `status` field - it should only ever be PENDING when updating
     * a credential.
     */
    SignedCredential: {
      /**
       * The id of a Credential.
       */
      id: string;
      type: components['schemas']['CredentialType'];
      /**
       * The challenge has signed but not yet verified.
       */
      status: 'PENDING';
      challenge: components['schemas']['CredentialChallengeSigned'];
      /**
       * Base64 encoded bytes - The public key of the Public/Private keypair.
       */
      payload: string;
    };
    /**
     * The object sent in the POST /thirdpartyRequests/transactions/{id}/authorizations request.
     */
    ThirdpartyRequestsTransactionsIDAuthorizationsPostRequest: {
      /**
       * Base64 encoded binary string - the original challenge.
       */
      challenge: string;
      /**
       * Base64 encoded binary string - the signed challenge
       */
      value: components['schemas']['BinaryString'];
      /**
       * Common ID between the PISP and FSP for the Consent object This tells DFSP and auth-service which constent allows the PISP to initiate transaction.
       */
      consentId: components['schemas']['CorrelationId'];
      /**
       * DFSP specific account identifiers, e.g. `dfspa.alice.1234`
       */
      sourceAccountId: components['schemas']['AccountAddress'];
      /**
       * The status of the authorization. This MUST be PENDING for a POST request
       */
      status: 'PENDING';
    };
    /**
     * The object sent in the PUT /thirdpartyRequests/transactions/{id}/authorizations request.
     */
    ThirdpartyRequestsTransactionsIDAuthorizationsPutResponse: {
      /**
       * Base64 encoded binary string - the original challenge.
       */
      challenge: string;
      /**
       * Base64 encoded binary string - the signed challenge.
       */
      value: components['schemas']['BinaryString'];
      /**
       * Common ID between the PISP and FSP for the Consent object This tells DFSP and auth-service which consent allows the PISP to initiate transaction.
       */
      consentId: components['schemas']['CorrelationId'];
      /**
       * DFSP specific account identifiers, e.g. `dfspa.alice.1234`
       */
      sourceAccountId: components['schemas']['AccountAddress'];
      /**
       * The status of the authorization. This value must be `VERIFIED` for a PUT request.
       */
      status: 'VERIFIED';
    };
    /**
     * The object sent in the PATCH /thirdpartyRequests/transactions/{ID} callback.
     */
    ThirdpartyRequestsTransactionsIDPatchResponse: {
      transactionId: components['schemas']['CorrelationId'];
      transactionRequestState: components['schemas']['TransactionRequestState'];
      transactionState: components['schemas']['TransactionState'];
    };
    /**
     * The object sent in the PUT /thirdPartyRequests/transactions/{ID} request.
     */
    ThirdpartyRequestsTransactionsIDPutResponse: {
      transactionId: components['schemas']['CorrelationId'];
      transactionRequestState: components['schemas']['TransactionRequestState'];
    };
    /**
     * The object sent in the POST /thirdpartyRequests/transactions request.
     */
    ThirdpartyRequestsTransactionsPostRequest: {
      /**
       * Common ID between the FSPs for the transaction request object. The ID should be reused for resends of the same transaction request. A new ID should be generated for each new transaction request.
       */
      transactionRequestId: components['schemas']['CorrelationId'];
      /**
       * DFSP specific account identifiers, e.g. `dfspa.alice.1234`
       */
      sourceAccountId: components['schemas']['AccountAddress'];
      /**
       * Common ID between the PISP and FSP for the Consent object This tells DFSP and auth-service which constent allows the PISP to initiate transaction.
       */
      consentId: components['schemas']['CorrelationId'];
      /**
       * Information about the Payee in the proposed financial transaction.
       */
      payee: components['schemas']['Party'];
      /**
       * Information about the Payer in the proposed financial transaction.
       */
      payer: components['schemas']['Party'];
      /**
       * SEND for sendAmount, RECEIVE for receiveAmount.
       */
      amountType: 'SEND' | 'RECEIVE';
      /**
       * Requested amount to be transferred from the Payer to Payee.
       */
      amount: components['schemas']['Money'];
      /**
       * Type of transaction.
       */
      transactionType: {
        /**
         * Below are the allowed values for the enumeration.
         * - DEPOSIT - Used for performing a Cash-In (deposit) transaction.
         * In a normal scenario, electronic funds are transferred from a
         * Business account to a Consumer account, and physical cash is given
         * from the Consumer to the Business User.
         * - WITHDRAWAL - Used for performing a Cash-Out (withdrawal) transaction.
         * In a normal scenario, electronic funds are transferred from a Consumer’s
         * account to a Business account, and physical cash is given from the Business
         * User to the Consumer.
         * - TRANSFER - Used for performing a P2P (Peer to Peer, or Consumer to Consumer)
         * transaction.
         * - PAYMENT - Usually used for performing a transaction from a Consumer to a
         * Merchant or Organization, but could also be for a B2B (Business to Business)
         * payment. The transaction could be online for a purchase in an Internet store,
         * in a physical store where both the Consumer and Business User are present, a
         * bill payment, a donation, and so on.
         * - REFUND - Used for performing a refund of transaction.
         */
        scenario: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'PAYMENT' | 'REFUND';
        /**
         * Possible sub-scenario, defined locally within the scheme (UndefinedEnum Type).
         */
        subScenario?: string;
        /**
         * Below are the allowed values for the enumeration.
         * - PAYER - Sender of funds is initiating the transaction.
         * The account to send from is either owned by the Payer or is connected to the
         * Payer in some way.
         * - PAYEE - Recipient of the funds is initiating the transaction by sending a
         * transaction request. The Payer must approve the transaction, either
         * automatically by a pre-generated OTP or by pre-approval of the Payee,
         * or by manually approving in his or her own Device.
         */
        initiator: 'PAYER' | 'PAYEE';
        /**
         * Below are the allowed values for the enumeration.
         * - CONSUMER - Consumer is the initiator of the transaction.
         * - AGENT - Agent is the initiator of the transaction.
         * - BUSINESS - Business is the initiator of the transaction.
         * - DEVICE - Device is the initiator of the transaction.
         */
        initiatorType: 'CONSUMER' | 'AGENT' | 'BUSINESS' | 'DEVICE';
        /**
         * Data model for the complex type Refund.
         */
        refundInfo?: {
          originalTransactionId: components['schemas']['CorrelationId'];
          /**
           * Reason for the refund.
           */
          refundReason?: string;
        };
        /**
         * (BopCode) The API data type [BopCode](https://www.imf.org/external/np/sta/bopcode/)
         * is a JSON String of 3 characters, consisting of digits only.
         * Negative numbers are not allowed. A leading zero is not allowed.
         */
        balanceOfPayments?: string;
      };
      /**
       * Date and time until when the transaction request is valid. It can be set to get a quick failure in case the peer FSP takes too long to respond.
       */
      expiration: string;
    };
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payer FSP has received the transaction from the Payee FSP.
     * - PENDING - Payer FSP has sent the transaction request to the Payer.
     * - ACCEPTED - Payer has approved the transaction.
     * - REJECTED - Payer has rejected the transaction."
     */
    TransactionRequestState: 'RECEIVED' | 'PENDING' | 'ACCEPTED' | 'REJECTED';
    /**
     * Below are the allowed values for the enumeration.
     * - RECEIVED - Payee FSP has received the transaction from the Payer FSP.
     * - PENDING - Payee FSP has validated the transaction.
     * - COMPLETED - Payee FSP has successfully performed the transaction.
     * - REJECTED - Payee FSP has failed to perform the transaction.
     */
    TransactionState: 'RECEIVED' | 'PENDING' | 'COMPLETED' | 'REJECTED';
    /**
     * A credential used to allow a user to prove their identity and access
     * to an account with a DFSP.
     *
     * UnsignedCredential is a special formatting of the credential to allow us to be
     * more explicit about the `status` field - it should only ever be PENDING when updating
     * a credential.
     */
    UnsignedCredential: {
      type: components['schemas']['CredentialType'];
      /**
       * The challenge has initialized but not yet answered by the PISP.
       */
      status: 'PENDING';
      challenge: components['schemas']['CredentialChallengeUnsigned'];
    };
    /**
     * A credential used to allow a user to prove their identity and access
     * to an account with a DFSP.
     *
     * VerifiedCredential is a special formatting of the credential to allow us to be
     * more explicit about the `status` field - it should only ever be VERIFIED when updating
     * a credential.
     */
    VerifiedCredential: {
      /**
       * The id of a Credential.
       */
      id?: string;
      type: components['schemas']['CredentialType'];
      /**
       * The Credential is valid, and ready to be used by the PISP.
       */
      status: 'VERIFIED';
      challenge: components['schemas']['CredentialChallengeSigned'];
      /**
       * Base64 encoded bytes - The public key of the Public/Private keypair.
       */
      payload?: string;
    };
  };
}