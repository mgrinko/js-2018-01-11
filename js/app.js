"use strict"

import {phones} from './phones';
import {PhonesListItem} from './PhonesListItem';

for (let value of phones) {
	new PhonesListItem(document.body.querySelector(`ul[class="phones"]`), value);
}