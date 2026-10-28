/**
 * Utility formatters for SEBASTIAN Campus Canteen
 */

/**
 * Format a number as Pakistani Rupee currency
 * @param {number} amount
 * @returns {string} e.g. "Rs. 280"
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return 'Rs. 0';
  }
  return `Rs. ${amount.toLocaleString('en-PK')}`;
}

/**
 * Capitalize first letter of each word
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
