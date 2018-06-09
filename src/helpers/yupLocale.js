import { setLocale } from 'yup/lib/customLocale';

setLocale({
  mixed: {
    required: 'this field is missing',
  },
});
