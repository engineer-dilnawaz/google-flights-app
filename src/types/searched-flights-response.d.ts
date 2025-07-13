export interface SearchFlightsResponse {
  status: boolean;
  timestamp: number;
  data: FlightSearchData;
}

export interface FlightSearchData {
  context: FlightSearchContext;
  itineraries: FlightItinerary[];
  messages: any[];
  filterStats: FlightFilterStats;
  flightsSessionId: string;
  destinationImageUrl: string;
}

export interface FlightSearchContext {
  status: string;
  sessionId: string;
  totalResults: number;
}

export interface FlightFilterStats {
  duration: FlightDurationRange;
  total: number;
  hasCityOpenJaw: boolean;
  multipleCarriers: FlightMultipleCarriers;
  airports: FlightAirportGroup[];
  carriers: FlightCarrier[];
  stopPrices: FlightStopPrices;
  alliances: FlightAlliance[];
}

export interface FlightDurationRange {
  min: number;
  max: number;
  multiCityMin: number;
  multiCityMax: number;
}

export interface FlightMultipleCarriers {
  minPrice: string;
  rawMinPrice: null;
}

export interface FlightAirportGroup {
  city: string;
  airports: FlightAirport[];
}

export interface FlightAirport {
  id: string;
  entityId: string;
  name: string;
}

export interface FlightCarrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
  allianceId: number;
  minPrice?: string;
}

export interface FlightStopPrices {
  direct: FlightStopPrice;
  one: FlightStopPrice;
  twoOrMore: FlightStopPrice;
}

export interface FlightStopPrice {
  isPresent: boolean;
  formattedPrice: string;
  rawPrice: number;
}

export interface FlightAlliance {
  id: number;
  name: string;
}

export interface FlightItinerary {
  id: string;
  price: FlightPrice;
  legs: FlightLeg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FlightFarePolicy;
  fareAttributes: FlightFareAttributes;
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
  tags?: string[];
  eco?: FlightEco;
}

export interface FlightPrice {
  raw: number;
  formatted: string;
  pricingOptionId: string;
}

export interface FlightLeg {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: FlightLegCarriers;
  segments: FlightSegment[];
  airportChangesIn?: string[];
}

export interface FlightPlace {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

export interface FlightLegCarriers {
  marketing: FlightMarketingCarrier[];
  operationType: string;
  operating?: FlightMarketingCarrier[];
}

export interface FlightMarketingCarrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface FlightSegment {
  id: string;
  origin: FlightSubPlace;
  destination: FlightSubPlace;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: FlightCarrierDetails;
  operatingCarrier: FlightCarrierDetails;
  transportMode: string;
}

export interface FlightSubPlace {
  flightPlaceId: string;
  displayCode: string;
  parent: FlightParentPlace;
  name: string;
  type: string;
  country: string;
}

export interface FlightParentPlace {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

export interface FlightCarrierDetails {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
  displayCode: string;
}

export interface FlightFarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export interface FlightFareAttributes {}

export interface FlightEco {
  ecoContenderDelta: number;
}
