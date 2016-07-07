import React from 'react';
import test from 'ava';
import OfferListItem from '../../components/OfferListItem/OfferListItem';
import { mountWithIntl } from '../../../../util/react-intl-test-helper';

const offer = {
  id: 0,
  title: 'salty vegas nights',
  photos: ['images/photo1.jpg'],
  options: [
    {
      price: 2300,
    },
  ],
};
const props = {
  offer,
};

test('has correct props', t => {
  const wrapper = mountWithIntl(
    <OfferListItem {...props} />
  );

  t.deepEqual(wrapper.prop('offer'), props.offer);
});
