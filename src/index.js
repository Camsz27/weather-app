import './input.scss';
import { gatherInfo } from './weather';
import { gatherPicture } from './unsplash';

// api key 70070eb1a20a2232bd83f25cecb92701

gatherInfo('Bogota');
gatherPicture('Bogota');
