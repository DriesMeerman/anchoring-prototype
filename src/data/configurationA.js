export const signupBonus = 200;

export const questions = [
    {
        label: 'Age', 
        type: 'number',
        minShareCount: 10,
        answer: null  
    },
    {
        label: 'Gender',
        type: 'dropdown',
        options: ['Male', 'Female', 'Other'],
        minShareCount: 20,
        answer: null
    },
    {
        label: 'Postal Code', 
        type: 'text',
        minShareCount: 30,
        answer: null  
    },
    {
        label: 'Highest achieved education',
        type: 'dropdown',
        options: [
            'None',
            'Basisonderwijs',
            'VMBO',
            'HAVO',
            'VWO',
            'MBO',
            'Bachelor',
            'Master',
            'PhD'
        ],
        minShareCount: 40,
        answer: null
    },
    {
        label: 'Bruto Salary',
        type: 'dropdown',
        options: [
            'Less than €1000',
            '€1000 - 1999',
            '€2000 - 2999',
            '€3000 - 3999',
            '€4000 - 4999',
            'More than €5000'
        ],
        minShareCount: 50,
        answer: null
    }
];