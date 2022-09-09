/**
 * Формирует массив треков, фильтруя исходные данные по фильтру checkedYears
 */

import { TSong } from '../types';

export const checkedYearsFilterArray: (
  checkedItems: string[],
  data: TSong[],
) => TSong[] = (checkedItems, data) => {
  const checkedYearsFilteredData: TSong[] = [];

  checkedItems.forEach((release_date: string) =>
    data.forEach((item) => {
      if (item.release_date === release_date) {
        checkedYearsFilteredData.push(item);
      }
    }),
  );

  return checkedYearsFilteredData;
};
