from marshmallow import Schema, fields, pre_load


class ProductSchema(Schema):
    ProductID = fields.Int()
    ProductName = fields.Str()
    ProductStatus = fields.Str()
    ProductPhotoURL = fields.Str()

    @pre_load
    def make_object(self, data, **kwargs):
        return data
