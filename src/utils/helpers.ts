export const getDateDiff = (date: string, referenceTime: number) => {
  const normalizedDate = date.replace(" ", "T");
  const hasTimeZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(normalizedDate);
  // Mynet dates are Turkey-local timestamps without an explicit offset.
  const givenTime: Date = new Date(
    hasTimeZone ? normalizedDate : `${normalizedDate}+03:00`,
  );
  // Use the serialized render time so server HTML and hydration match.
  const now: Date = new Date(referenceTime);

  // Zaman farkını milisaniye cinsinden hesapla
  const timeDifference: number = now.getTime() - givenTime.getTime();

  // Milisaniyeden birimleri hesapla
  const seconds: number = Math.floor(timeDifference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const weeks: number = Math.floor(days / 7);

  // Ay farkı hesapla
  const monthDiff: number =
    (now.getFullYear() - givenTime.getFullYear()) * 12 +
    (now.getMonth() - givenTime.getMonth());

  // Yıl farkı hesapla
  const yearDiff: number = now.getFullYear() - givenTime.getFullYear();

  // Kalan süreler
  // const remainingDays: number = days % 7;
  const remainingHours: number = hours % 24;
  const remainingMinutes: number = minutes % 60;
  const remainingSeconds: number = seconds % 60;

  // Sonuçlardan en büyük olanı kontrol et ve return et
  if (yearDiff > 0) {
    return `${yearDiff} yıl`;
  } else if (monthDiff > 0) {
    return `${monthDiff} ay`;
  } else if (weeks > 0) {
    return `${weeks} hafta`;
  } else if (days > 0) {
    return `${days} gün`;
  } else if (remainingHours > 0) {
    return `${remainingHours} saat`;
  } else if (remainingMinutes > 0) {
    return `${remainingMinutes} dakika`;
  } else {
    return `${remainingSeconds} saniye`;
  }
};
