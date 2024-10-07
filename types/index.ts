import { ReactElement } from "react";

export interface CustomNavbarProps {
    textStyles?: string;
    containerStyles?: string;
}

export interface CustomHeaderProps{
    heading: string;
    icon: ReactElement;
    menuIcon?: ReactElement;
    subHeading?: string;
}

export interface WeatherDataType{
    weather: string;
    temperature: number;
    time: string;
    state: string
}

export interface HealthDataSlidesProps{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}