import './input.scss';
import { gatherInfo } from './weather';
import { gatherPicture } from './unsplash';
import { changeExtra, changeMain } from './domManipulation';

gatherInfo('Bogota');
gatherPicture('Bogota');
changeMain('Cloudy', 'Bogota', 'CO', '30', 'This is');
changeExtra('45', '85', '3');
