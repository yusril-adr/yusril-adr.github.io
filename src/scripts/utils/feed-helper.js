const FeedHelper = {
  async formatText(text) {
    const specialChar = await this._htmlspecialchars(text);
    return this._stripSlashes(specialChar);
  },

  async _htmlspecialchars(string) {
    // A collection of special characters and their entities.
    const specialChars = [
      ['&', '&amp;'],
      ['<', '&lt;'],
      ['>', '&gt;'],
      ['"', '&quot;'],
    ];

    // Our finalized string will start out as a copy of the initial string.
    let escapedString = string;

    specialChars.forEach((specialChar) => {
      // Replace all instances of the special character with its entity.
      escapedString = escapedString.replace(
        new RegExp(specialChar[0], 'g'),
        specialChar[1],
      );
    });

    // Return the escaped string.
    return escapedString;
  },

  async _stripSlashes(string) {
    return string.replace(/\\(.)/mg, '$1');
  },
};

export default FeedHelper;
