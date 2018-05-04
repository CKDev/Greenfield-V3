export const SUBMIT_FORM = 'SUBMIT_FORM';

export function submitForm(payload) {
  return {
    type: SUBMIT_FORM,
    payload: payload
  };
}
