export const validations = {
  firstname: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'maxLength',
      message: 'The maximum number of characters is 30',
      value: 30,
    },
    {
      type: 'minLength',
      message: 'The minimum number of characters is 3',
      value: 3,
    },
    {
      type: 'pattern',
      message: 'Please input alphabet characters only',
      value: /^[A-Za-z]+$/,
    },
  ],
  phone: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'maxLength',
      message: 'The number of characters must be 10',
      value: 11,
    },
    {
      type: 'minLength',
      message: 'The number of characters must be 10',
      value: 9,
    },
    {
      type: 'pattern',
      message: 'Phone number must be numbers only',
      value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
    },
  ],
  deliveryType: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
  ],
  description: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'maxLength',
      message: 'The maximum number of characters is 40',
      value: 40,
    },
    {
      type: 'minLength',
      message: 'The minimum number of characters is 3',
      value: 3,
    },
  ],
  сourierType: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
  ],
  addressDetails: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'minLength',
      message: 'The minimum number of characters is 3',
      value: 3,
    },
    {
      type: 'maxLength',
      message: 'The maximum number of characters is 30',
      value: 30,
    },
  ],
  city: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'maxLength',
      message: 'The maximum number of characters is 30',
      value: 30,
    },
    {
      type: 'minLength',
      message: 'The minimum number of characters is 3',
      value: 3,
    },
  ],
  postOffice: [
    {
      type: 'required',
      message: 'This field is required',
      value: true,
    },
    {
      type: 'maxLength',
      message: 'The maximum number of characters is 4',
      value: 5,
    },
    {
      type: 'minLength',
      message: 'The minimum number of characters is 1',
      value: 0,
    },
    {
      type: 'pattern',
      message: 'Post office number must be numbers only',
      value: /^[0-9]+$/,
    },
  ],
};

export const initialValues = {
  firstname: '',
  phone: '',
  description: '',
  deliveryType: '',
  city: '',
  сourierType: '',
  postOffice: '',
};

export const deliveryType = {
  deliveryByPost: 'deliveryByPost',
  pickupInStore: 'pickupInStore',
  сourier: 'сourier',
};

export const сourierType = {
  express: 'express',
  standard: 'standard',
};
