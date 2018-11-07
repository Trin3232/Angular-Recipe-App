export interface Recipe {
  title :string;
  image :string;
  ingredientsList :any[];
  ingredientName? :string;
  quantity :number;
  unitOfMeasurement :string;
  method :string;
}
