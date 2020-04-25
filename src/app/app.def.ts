export const API_KEY = 'vANbqTxIhQQPmX2NOxRsf6VxXn2qKJgo';

export const DEFAULT_LAT = 32.109333; //TLV cord
export const DEFAULT_LNG = 34.855499; //TLV cord

export const ADD_FAV = `Add To`;
export const REMOVE_FAV = `Remove From`;

export let state = {
  flag : false as boolean
};

export interface FiveDaysForecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: string;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType?: string;
  PrecipitationIntensity?: string;
}

interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}


interface Minimum {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate?: any;
  EndEpochDate?: any;
  MobileLink: string;
  Link: string;
}
