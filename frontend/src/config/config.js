export const validations = {
    firstname: [
        {
            type: 'required',
            message: 'This field is required',
            value: true,
        },
    ],
    phone: [
        {
            type: 'required',
            message: 'This field is required',
            value: true,
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
    ],
};
export const initialValues = {
    firstname: '',
    phone: '',
    description: '',
    deliveryType: '',
};
export const deliveryType = {
    delivery: 'delivery',
    pickup: 'pickup',
    сourier: 'сourier'
};
