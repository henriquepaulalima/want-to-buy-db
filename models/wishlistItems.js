const wishlistItems = (sequelize, DataTypes) => {
  const WishlistItem = sequelize.define('wishlist', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    }
  }, {
    tableName: 'wishlist'
  });

  return WishlistItem;
}

module.exports = wishlistItems;
