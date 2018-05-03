export const CHECK_RADIO = 'CHECK_RADIO';

export function checkRadio(checked) {
  return {
    type: CHECK_RADIO,
    payload: checked
  };
}
