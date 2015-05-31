var mongoose = require('mongoose'),
	Schema = mongoose.Schema
	relationship = require('mongoose-relationship');


var mstUserSchema = new Schema({
	id_user				: String,
	user_fullname		: String,
	id_user_status		: { type: Schema.ObjectId, ref: 'mst_User_Status', childPath: 'id_user' },
	id_city				: { type: Schema.ObjectId, ref: 'mst_City', childPath: 'id_user' },
	id_user_access		: { type: Schema.ObjectId, ref: 'mst_User_Access', childPath: 'id_user' },
	id_user_authority 	: { type: Schema.ObjectId, ref: 'mst_User_Authority', childPath: 'id_user' },
	id_transaction 		: [{ type: Schema.ObjectId, ref: 'trx_Transaction' }],
	id_catalog 			: [{ type: Schema.ObjectId, ref: 'trx_Catalog' }],
	username			: String,
	password			: String,
	user_address		: String,
	user_hp				: Number,
	user_telp			: Number,
	user_email			: String,
	user_photo			: String,
	user_wallet			: String,
	created_at			: { type: Date, default: Date.now }
});
mstUserSchema.plugin(relationship, { relationshipPathName: 'id_user_status' });
mstUserSchema.plugin(relationship, { relationshipPathName: 'id_city' });
mstUserSchema.plugin(relationship, { relationshipPathName: 'id_user_access' });
mstUserSchema.plugin(relationship, { relationshipPathName: 'id_user_authority' });

var mstUserAuthoritySchema = new Schema({
	id_user_authority 	: String,
	user_authority 		: String,
	id_user 			: [{ type: Schema.ObjectId, ref: 'mst_User' }],
	created_at			: { type: Date, default: Date.now }
});

var mstUserAccessSchema = new Schema({
	id_user_access 		: String,
	user_access 		: String,
	id_user 			: [{ type: Schema.ObjectId, ref: 'mst_User' }],
	created_at			: { type: Date, default: Date.now }
});

var mstUserStatusSchema = new Schema({
	id_user_status 		: String,
	user_status 		: String,
	id_user 			: [{ type: Schema.ObjectId, ref: 'mst_User' }],
	created_at			: { type: Date, default: Date.now }
});

var mstProductGroupSchema = new Schema ({
	id_product_group	: String,
	product_group 		: String,
	id_product_category	: [{ type: Schema.ObjectId, ref: 'mst_Product_Category' }],
	created_at			: { type: Date, default: Date.now }	
});

var mstProductCategorySchema = new Schema ({
	id_product_category	: String,
	product_category	: String,
	id_product 			: { type: Schema.ObjectId, ref: 'mst_Product', childPath: 'id_product_category' },
	id_product_group	: { type: Schema.ObjectId, ref: 'mst_Product_Group', childPath: 'id_product_category' },
	created_at			: { type: Date, default: Date.now }
});
mstProductCategorySchema.plugin(relationship, { relationshipPathName: 'id_product' });
mstProductCategorySchema.plugin(relationship, { relationshipPathName: 'id_product_group' });

var mstSupplierSchema = new Schema ({
	id_supplier			: String,
	supplier 			: String,
	id_product 			: { type: Schema.ObjectId, ref: 'mst_Product', childPath: 'id_supplier' },
	id_supplier_type	: { type: Schema.ObjectId, ref: 'mst_Supplier_Type', childPath: 'id_supplier' },
	id_supplier_status	: { type: Schema.ObjectId, ref: 'mst_Supplier_Status', childPath: 'id_supplier' },
	id_city 			: { type: Schema.ObjectId, ref: 'mst_City', childPath: 'id_supplier' },
	supplier_code		: String,
	supplier_address	: String,
	supplier_remark		: String,
	created_at			: {type: Date, default: Date.now}	
});
mstSupplierSchema.plugin(relationship, { relationshipPathName: 'id_supplier_type' });
mstSupplierSchema.plugin(relationship, { relationshipPathName: 'id_supplier_type' });
mstSupplierSchema.plugin(relationship, { relationshipPathName: 'id_supplier_status' });
mstSupplierSchema.plugin(relationship, { relationshipPathName: 'id_city' });

var mstSupplierTypeSchema = new Schema ({
	id_supplier_type	: String,
	supplier_type 		: String,
	id_supplier 		: [{ type: Schema.ObjectId, ref: 'mst_Supplier' }],
	created_at			: { type: Date, default: Date.now }
});

var mstSupplierStatusSchema = new Schema ({
	id_supplier_status	: String,
	supplier_type 		: String,
	id_supplier 		: [{ type: Schema.ObjectId, ref: 'mst_Supplier' }],
	created_at			: { type: Date, default: Date.now }
});

var mstCitySchema = new Schema ({
	id_city 			: String,
	city 				: String,
	id_city_region		: { type: Schema.ObjectId, ref: 'mst_City_Region', childPath: 'id_city' },
	id_user 			: [{ type: Schema.ObjectId, ref: 'mst_User' }],
	id_supplier 		: [{ type: Schema.ObjectId, ref: 'mst_Supplier' }],
	created_at			: { type: Date, default: Date.now }
});
mstCitySchema.plugin(relationship, { relationshipPathName: 'id_city_region' });

var mstCityRegionSchema = new Schema ({
	id_city_region 		: String,
	city_region 		: String,
	id_city 			: [{ type: Schema.ObjectId, ref: 'mst_City' }],
	created_at			: { type: Date, default: Date.now }
}); 

var mstSosmedSchema = new Schema ({
	id_sosmed			: String,
	sosmed 				: String,
	sosmed_code			: String,
	sosmed_link			: String,
	sosmed_logo			: String,
	sosmed_account		: String,
	created_at			: { type: Date, default: Date.now }
});

var mstProductStockSchema = new Schema ({
	id_product 			: String,
	product 			: String,
	id_product_category : { type: Schema.ObjectId, ref: 'mst_Product_Category', childPath: 'id_product' },
	id_supplier 		: { type: Schema.ObjectId, ref: 'mst_Supplier', childPath: 'id_product' },
	id_product_stock 	: [{ type: Schema.ObjectId, ref: 'mst_Product_Stock' }],
	id_product_photo	: [{ type: Schema.ObjectId, ref: 'mst_Product_Photo' }],
	id_coupon 			: [{ type: Schema.ObjectId, ref: 'trx_Coupon' }],
	id_catalog			: [{ type: Schema.ObjectId, ref: 'trx_Catalog' }],
	product_rating		: Number,
	product_code		: String,
	product_desc		: String,
	product_type 		: String,
	product_weight		: String,
	product_review 		: String,
	product_price		: String,
	product_hotdeal		: String,
	product_sale		: Boolean,
	activated			: Boolean,
	created_at			: { type: Date, default: Date.now }
});
mstProductStockSchema.plugin(relationship, { relationshipPathName: 'id_product_category' });
mstProductStockSchema.plugin(relationship, { relationshipPathName: 'id_supplier' });

var mstProductPhotoSchema = new Schema ({
	id_product_photo	: String,
	product_photo 		: String,
	product_photo_url	: String,
	id_product_stock	: { type: Schema.ObjectId, ref: 'mst_Product_Stock', childPath: 'id_product_photo' },
	created_at			: { type: Date, default: Date.now }
});
mstProductPhotoSchema.plugin(relationship, {relationshipPathName: 'id_product_stock'});

var mstProductStockSchema = new Schema ({
	id_product_stock		: String,
	product_qty				: Number,
	id_product 				: { type: Schema.ObjectId, ref: 'mst_Product', childPath: 'id_product_stock' },
	id_product_size			: { type: Schema.ObjectId, ref: 'mst_Product_Size', childPath: 'id_product_stock' },
	id_product_color 		: { type: Schema.ObjectId, ref: 'mst_Product_Color', childPath: 'id_product_stock' },
	id_transaction_detail 	: [{ type: Schema.ObjectId, ref:'trx_Transaction_Detail' }],
	created_at				: { type: Date, default: Date.now }
});
mstProductStockSchema.plugin(relationship, { relationshipPathName: 'id_product' });
mstProductStockSchema.plugin(relationship, { relationshipPathName: 'id_product_size' });
mstProductStockSchema.plugin(relationship, { relationshipPathName: 'id_product_color' });

var mstProductColorSchema = new Schema ({
	id_product_color 	: String,
	product_color 		: String,
	id_product_stock 	: [{ type: Schema.ObjectId, ref: 'mst_Product_Stock' }],
	product_color_code 	: String,
	created_at			: { type: Date, default: Date.now }
});

var mstProductSizeSchema = new Schema ({
	id_product_size		: String,
	product_size 		: String,
	id_product_stock 	: [{ type: Schema.ObjectId, ref: 'mst_Product_Stock' }],
	product_size_code 	: String,
	created_at			: { type: Date, default: Date.now }
});

var mstTopupTypeSchema = new Schema ({
	id_topup_type		: String,
	topup_type 			: String,
	topup_type_plushmin	: String,
	created_at			: { type: Date, default: Date.now }
});

var mstShippingSchema = new Schema ({
	id_shipping 		: String,
	shipping 			: String,
	id_transaction 		: [{ type: Schema.ObjectId, ref: 'trx_Transaction' }],
	created_at			: { type: Date, default: Date.now }
});

var mstBankSchema = new Schema ({
	id_bank				: String,
	bank 				: String,
	id_transaction 		: [{ type: Schema.ObjectId, ref: 'trx_Transaction' }],
	created_at			: { type: Date, default: Date.now }
});

var trxCouponSchema = new Schema ({
	id_coupon			: String,
	coupon_code			: String,
	id_product 			: { type: Schema.ObjectId, ref: 'mst_Product', childPath: 'id_coupon' },
	coupon_valid 		: Date,
	created_at			: { type: Date, default: Date.now }
});
trxCouponSchema.plugin(relationship, { relationshipPathName: 'id_product' });

var trxTransactionSchema = new Schema ({
	id_transaction 			: String,
	transaction_time		: Date,
	id_user 				: { type: Schema.ObjectId, ref: 'mst_User', childPath: 'id_transaction' },
	id_shipping				: { type: Schema.ObjectId, ref: 'mst_Shipping', childPath: 'id_transaction' },
	id_bank					: { type: Schema.ObjectId, ref: 'mst_Bank', childPath: 'id_transaction'},
	id_transaction_detail	: [{ type: Schema.ObjectId, ref: 'trx_Transaction_Detail' }],
	transaction_confirm		: Boolean,
	transaction_notes		: String,
	created_at				: { type: Date, default: Date.now }
});
trxTransactionSchema.plugin(relationship, { relationshipPathName: 'id_user' });
trxTransactionSchema.plugin(relationship, { relationshipPathName: 'id_shipping' });
trxTransactionSchema.plugin(relationship, { relationshipPathName: 'id_bank' });

var trxTransactionDetailSchema = new Schema ({
	id_transaction_detail	: String,
	transaction_detail_qty	: Number,
	id_transaction 			: { type: Schema.ObjectId, ref: 'trx_Transaction', childPath: 'id_transaction_detail' },
	id_product_stock 		: { type: Schema.ObjectId, ref: 'mst_Product_Stock', childPath: 'id_transaction_detail' },
	transaction_detail_notes: String,
	created_at				: { type: Date, default: Date.now }
});
trxTransactionDetailSchema.plugin(relationship, { relationshipPathName: 'id_transaction' });
trxTransactionDetailSchema.plugin(relationship, { relationshipPathName: 'id_product_stock' });

var trxCatalogSchema = new Schema ({
	id_catalog 			: String,
	user_product_price	: String,
	id_user 			: { type: Schema.ObjectId, ref: 'mst_User', childPath: 'id_catalog' },
	id_product 			: { type: Schema.ObjectId, ref: 'mst_Product', childPath: 'id_catalog' },
	created_at			: { type: Date, default: Date.now }
});
trxCatalogSchema.plugin(relationship, { relationshipPathName: 'id_user' });
trxCatalogSchema.plugin(relationship, { relationshipPathName: 'id_product' });

var trxNewsSchema = new Schema ({
	id_news				: String,
	news_content		: String,
	id_user 			: { type: Schema.ObjectId, ref: 'mst_User', childPath: 'id_news' },
	news_time			: Date,
	created_at			: { type: Date, default: Date.now }
});
trxNewsSchema.plugin(relationship, { relationshipPathName: 'id_user' });

var trxFaqSchema = new Schema ({
	id_faq				: String,
	faq_question		: String,
	id_user 			: { type: Schema.ObjectId, ref: 'mst_User', childPath: 'id_news' },
	faq_answer 			: String,
	created_at			: { type: Date, default: Date.now }
});
trxFaqSchema.plugin(relationship, { relationshipPathName: 'id_user' });

// CREATE MODELS
// ../routes/api.js
mongoose.model('mst_User', mstUserSchema); // ..passport-init.js
mongoose.model('mst_User_Authority', mstUserAuthoritySchema);
mongoose.model('mst_User_Access', mstUserAccessSchema);
mongoose.model('mst_User_Status', mstUserStatusSchema);
mongoose.model('mst_Product_Group', mstProductGroupSchema);
mongoose.model('mst_Product_Category', mstProductCategorySchema);
mongoose.model('mst_Supplier', mstSupplierSchema);
mongoose.model('mst_Supplier_Type', mstSupplierTypeSchema);
mongoose.model('mst_Supplier_Status', mstSupplierStatusSchema);
mongoose.model('mst_City', mstCitySchema);
mongoose.model('mst_City_Region', mstCityRegionSchema);
mongoose.model('mst_Sosmed', mstSosmedSchema);
mongoose.model('mst_Product_Photo', mstProductPhotoSchema);
mongoose.model('mst_Product_Stock', mstProductStockSchema);
mongoose.model('mst_Product_Color', mstProductColorSchema);
mongoose.model('mst_Product_Size', mstProductSizeSchema);
mongoose.model('mst_Topup_Type', mstTopupTypeSchema);
mongoose.model('mst_Shipping', mstShippingSchema);
mongoose.model('mst_Bank', mstBankSchema);
mongoose.model('trx_Coupon', trxCouponSchema);
mongoose.model('trx_Transaction', trxTransactionSchema);
mongoose.model('trx_Transaction_Detail', trxTransactionDetailSchema);
mongoose.model('trx_Catalog', trxCatalogSchema);
mongoose.model('trx_News', trxNewsSchema);
mongoose.model('trx_Faq', trxFaqSchema);