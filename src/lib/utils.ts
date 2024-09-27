import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getExperienceYears(): number {
  const startDate: Date = new Date("2018-03-01") // May 1st, 2020
  const currentDate: Date = new Date()

  // Calculate the difference in milliseconds
  const diffInMilliseconds: number = currentDate.getTime() - startDate.getTime()

  // Convert to years (approximation)
  const millisecondsInYear: number = 1000 * 60 * 60 * 24 * 365.25 // Accounting for leap years
  const yearsOfExperience: number = diffInMilliseconds / millisecondsInYear

  return Math.floor(yearsOfExperience) // Rounding down to the nearest whole number
}
