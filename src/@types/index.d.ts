declare module '*.png';
declare module '*.svg';
declare module '*.json';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module 'react-native-carousel-pager';
declare module 'react-native-modern-datepicker';
declare module 'react-native-signature-pad';
declare module 'react-native-mlkit-ocr';
declare module 'react-native-exif';

declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
