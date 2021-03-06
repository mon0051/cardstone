var realEventListener = window.addEventListener;

window.addEventListener = function(...args){
  if(Math.random() > 0.1){
    realEventListener.call(this,...args);
  }else{
    console.log(args);
  }
}


let p = {
  "Client": {
    "BudgetMode": 1,
    "ClientId": 53185,
    "ClientName": "integration test client",
    "ShortCodeId": 0,
    "ShortCodeName": "",
    "ClientPostName": "Post name",
    "ClientPostName2": "",
    "DXCode": "",
    "DXAddress": "",
    "StreetAddress1": "Street1",
    "StreetAddress2": "",
    "Suburb": "Suburb",
    "StateId": 1,
    "PostCode": "3000",
    "PostalAddress1": "Street1",
    "PostalAddress2": "",
    "PostalSuburb": "Suburb",
    "PostalStateId": 1,
    "PostalPostCode": "3000",
    "PostalAddressSameAsStreetAddress": false,
    "ServiceTypeId": 1,
    "ServiceTypeName": "Conference",
    "ClientTypeId": 0,
    "CreditLine": null,
    "CreditLineId": null,
    "CreditLineCodeName": null,
    "MonthlyBudget": null,
    "MaximumTranslationJobValue": null,
    "AnnualBudget": null,
    "GLCodeId": null,
    "GLCodeName": "",
    "ServiceUsedbyClientId": 1,
    "ServiceNameCode": "1",
    "ServiceName": "All Services",
    "ServiceCode": "531851",
    "DHSRegionId": null,
    "ConfirmationTypeId": 1,
    "ConfirmationFax": "",
    "ConfirmationTelephoneNumber": "",
    "ConfirmationEmailAddress": "",
    "ClientInformation": "",
    "ClientNotes": "",
    "MinBookingPeriod": null,
    "MinBookingPeriodId": 0,
    "MinFeeBookingHours": null,
    "MinFeeBookingHoursId": 0,
    "HourlyRateBookingHours": null,
    "HourlyRateBookingHoursId": 0,
    "MinFeeAfterHours": null,
    "MinFeeAfterHoursId": 0,
    "HourlyRateAfterHours": null,
    "HourlyRateAfterHoursId": 0,
    "ShortNoticeLoading": null,
    "ShortNoticeLoadingId": 0,
    "GSTApplicable": true,
    "PurchaseOrderNumber": "",
    "UserPayId": 0,
    "AccountStatusId": 1,
    "AccountStatus": "Active",
    "ClientClassificationId": 1,
    "IsRegionalClient": false,
    "TravelFee": null,
    "TravelFeeID": null,
    "MinimumInterpretingNAATICodeID": 0,
    "AlertOnNewBookings": true,
    "AllowClaimsProcessing": false,
    "MILSBHPhone": "",
    "MILSAHPhone": "",
    "MILSPIN": "",
    "TelephoneInterpretingRateCategoryId": 1,
    "TelephoneInterpreterPreferenceId": 1,
    "OnSiteInterpreterPreferenceId": 1,
    "ReportToPerson": "",
    "PoliceCheckRequired": false,
    "WwcRequired": false,
    "Updated": "2017-08-24T16:26:32.337+10:00",
    "Created": "2017-08-24T16:26:32.337+10:00",
    "Deleted": false,
    "DeletedDateTime": null,
    "ServiceRestrictions": [],
    "ManualAllocationOnly": false,
    "Error": "",
    "IsValid": false,
    "IsNew": false,
    "HasChanges": true
  },
  "ShortNoticeLoadingDesc": "Nil",
  "AlternativeDate": false,
  "ManualAllocationOnly": false,
  "InterpreterBookingId": 620390,
  "CancellationId": "C620390",
  "CancellationTypeId": null,
  "CancellationClientFee": 0.0,
  "CancellationContractorFee": 0.0,
  "CancellationTypeName": "",
  "ClientId": 53185,
  "Contractor": null,
  "ClientName": "integration test client",
  "ClientTypeId": 0,
  "ContractorId": null,
  "InterpretingNAATICodeID": null,
  "InterpretingNAATICodeName": null,
  "MinimumNAATILevelName": "Professional",
  "BookingTakenByUserID": 0,
  "BookingTakenByUserName": "",
  "ServiceTypeId": 1,
  "ContractorConfirmationRequired": false,
  "ContractorFullName": null,
  "VITSAllocatedByUser": "",
  "ContractorAllocatedBy_FK": null,
  "ContractorAllocatedDateTime": null,
  "AdHocReferenceNumber": "Test PO",
  "NESBReferenceNumber": "",
  "AuthorityReferenceNumber": "",
  "ClientReferenceNumber": null,
  "BookingTravelFee": null,
  "BookingRequestedDateTime": "2017-08-24T16:26:32.213",
  "BookingRequestedAfterHours": false,
  "BookingRequestedAfterHoursString": "No",
  "ShortNoticeLoadingId": 4,
  "ShortNoticeLoading": 0.0000,
  "InterpretingBookingSourceId": 1,
  "InterpretingBookingSourceName": "Telephone",
  "UrgencyId": 3,
  "UrgencyName": "Standard",
  "InterpretingStatusCodeId": 1,
  "InterpretingStatusCodeName": "Unassigned",
  "LanguageId": 2,
  "LanguageName": "ALBANIAN",
  "GenderId": null,
  "GenderName": "",
  "GenderMust": null,
  "GenderListEnabled": false,
  "PreferredInterpreterId": null,
  "PreferredInterpreterName": "",
  "PreferredInterpreterMust": null,
  "PreferredInterpreterListEnabled": false,
  "LocalInterpreterOnly": false,
  "InterpreterModeId": 1,
  "ConfirmByDateTime": null,
  "InterviewDateTime": "2017-08-27T06:26:30.863",
  "AlternativeInterviewDateTime": null,
  "InterviewDurationId": 7,
  "IsPrebookedTiJob": false,
  "InterviewDuration": 1.5,
  "NumberOfClients": 1,
  "NameOfNES": "Sam Bobson",
  "PhoneNumberOfNes": "0400000000",
  "InterviewAddress1": "address1",
  "InterviewAddress2": "",
  "InterviewSuburb": "Suburb",
  "InterViewStateId": 1,
  "InterViewStateName": "VIC",
  "InterviewPostCode": "3000",
  "HomeVisit": false,
  "InterpreterClaimDenied": false,
  "InterviewDepartment": "",
  "InterviewInstructions": "",
  "ClientNotes": "",
  "InterpreterLate": false,
  "SpecialInterpretingId": 1,
  "SpecialInterpretingType": 1,
  "InterpretingAssignmentTypeId": 1,
  "InterpretingAssignmentTypeName": "Interviews",
  "NatureOfInterview": "",
  "ConfirmationTypeId": 0,
  "ConfirmationTypeName": "",
  "ConfirmationFaxNumber": "",
  "ConfirmationEmailAddress": "",
  "ConfirmationTelephoneNumber": "",
  "ReportToPerson": "",
  "ReportToMobile": "",
  "ContactPerson": "",
  "ContactPhone": "",
  "BookingCancelled": false,
  "CancellationDateTime": null,
  "CancellationReferenceNumber": "",
  "CancellationReason": "",
  "CancellationSpokenTo": "",
  "CancellationInterpreterContacted": false,
  "CancellationInterpreterContactedDateTime": null,
  "CancellationAction": "",
  "CancellationAcceptedById": null,
  "CancellationAcceptedByName": "",
  "CancellationContactMethods": [],
  "ContractorClaimProcessed": false,
  "ContractorClaimProcessedDateTime": null,
  "ClientClaimProcessed": false,
  "ClientClaimProcessedDateTime": null,
  "SpecialBookingFeeID": null,
  "IsClaimBlockBooking": false,
  "ClaimBlockBookingParentID": null,
  "ClaimFareID": null,
  "ClaimFareAmount": 0.0000,
  "ClaimTravelTime": 0.0,
  "ClaimTravelTimeAmount": 0.0000,
  "ClaimTravelTimeClientAmount": 0.0000,
  "ClaimTravelDistanceClientAmount": 0.0000,
  "ClaimTravelDistance": 0.0,
  "ClaimTravelDistanceAmount": 0.0000,
  "ClaimTravelFee": false,
  "ClaimTravelFeeID": null,
  "ClaimTravelFeeAmount": 0.0,
  "ClaimAccomodation": 0.0000,
  "ClaimVITSUserID": null,
  "ClaimVITSUserName": "",
  "ClaimPerDiem": 0.0000,
  "ClaimInterviewStartTime": "2017-08-27T06:26:30.863",
  "ClaimInterviewEndTime": "2017-08-27T07:56:00",
  "ClaimInterviewDuration": "1.5 hrs",
  "ContractorTravelAndAccommodation": 0.0000,
  "ClientTravelAndAccommodation": 0.0000,
  "TotalClientCharge": 0.0000,
  "TotalClientChargeEvenIfProcessed": 0.0000,
  "TotalClientChargeGST": 0.000000,
  "TotalClientChargeIncGST": 0.000000,
  "TotalContractorPayment": 0.0000,
  "TotalContractorPaymentGST": 0.0,
  "TotalContractorPaymentIncGST": 0.0000,
  "ClaimNotes": "",
  "PaymentRun": null,
  "SuperJobId": null,
  "InvoiceRun": null,
  "ReasonForNonCompleteId": null,
  "Active": true,
  "Created": "2017-08-24T16:26:34.133+10:00",
  "Updated": "2017-08-24T16:26:34.133+10:00",
  "ClientAddress1": null,
  "ClientAddress2": null,
  "ClientSuburb": null,
  "ClientStateId": 0,
  "ClientPostCode": null,
  "HasChangesThatRequireReconfirmation": true,
  "IsAllocated": false,
  "IsAllocatedTBA": false,
  "IsCancelPending": false,
  "UrNumber": "",
  "IsCancelled": false,
  "JustDeallocatedInterpreter": false,
  "ContractorInterpretingPayment": 0.0000,
  "ClientInterpretingFee": 0.0000,
  "AfterHoursBookingFee": 0.0000,
  "BlockBookingFee": 0.0000,
  "ChargeClientGST": true,
  "VITSErrorId": null,
  "VITSError": false,
  "VITSErrorRecordedByUserId": null,
  "VITSErrorRecordedByUsername": " ",
  "MinimumInterpretingNAATICodeID": 300,
  "SpecialInstructionsForInterpreter": null,
  "ChildBookings": [],
  "IsCancellable": true,
  "JustUnallocatedInterpreterAsRefusal": false,
  "Error": "",
  "IsValid": false,
  "IsNew": false,
  "HasChanges": true
}
