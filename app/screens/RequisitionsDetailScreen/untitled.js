RequisitionsDetailScreen

- no suscrito
	status -> nuevos
//////
Quotation
[
  {
    "IsSubscribed": false,<-
    "HasPendigRequest": false,<-
  }
]
////////


- pendiente
	Quotation
	[
	  {
	    "RequisitionId": 190.0,
	    "PetitionId": null,
	    "LineServiceId": 1.0,
	    "ShortDescription": "VALVULA ESFERICA 6\" diam 600#  ASTM-A105",
	    "LineServiceCode": 10000020.0,
	    "Quantity": 1.000,
	    "OfferId": null,
	    "OfferCurrency": "MXN",
	    "OfferLineId": null,
	    "UnitPrice": null,
	    "DiscountFactor": null,
	    "PriceCeiling": null,
	    "Subtotal": 0.00000,
	    "MeasurementUnit": "C/U",
	    "IsClassified": false,
	    "IsSubscribed": false,
	    "HasPendigRequest": true,<-
	    "NoService": null,
	    "NoMaterial": "000000000010000020",
	    "Code": 10000020.0
	  }
	]
- suscrito
	Quotation
	[
	  {

	    "IsSubscribed": true,
	    "HasPendigRequest": false,

	  }
	]
- suscrito con ordenes

	[
	  {
	    "RequisitionId": 190.0,
	    "PetitionId": 311.0,
	    "LineServiceId": 1.0,
	    "ShortDescription": "VALVULA ESFERICA 6\" diam 600#  ASTM-A105",
	    "LineServiceCode": 10000020.0,
	    "Quantity": 1.000,
	    "OfferId": 45.0,
	    "OfferCurrency": "MXN",
	    "OfferLineId": null,
	    "UnitPrice": 15.00,
	    "DiscountFactor": 1.00,
	    "PriceCeiling": 10.00,
	    "Subtotal": 15.00000,
	    "MeasurementUnit": "C/U",
	    "IsClassified": false,
	    "IsSubscribed": true,
	    "HasPendigRequest": false,
	    "NoService": null,
	    "NoMaterial": "000000000010000020",
	    "Code": 10000020.0
	  }
	]











[
	{
		"Code": 10314254,
		"DiscountFactor": null,
		"HasPendigRequest": false,
		"IsClassified": false,
		"IsSubscribed": false,
		"LineServiceCode": 10314254,
		"LineServiceId": 1,
		"MeasurementUnit": "PZA",
		"NoMaterial": "000000000010314254",
		"NoService": null,
		"OfferCurrency": "MXN",
		"OfferId": null,
		"OfferLineId": null,
		"PetitionId": 40,
		"PriceCeiling": null,
		"Quantity": 1,
		"RequisitionId": 52,
		"ShortDescription": "TONER HP",
		"Subtotal": 0,
		"UnitPrice": null,
	},
	
]