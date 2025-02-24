
import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";


const ProductCategoryPage = async () => {
    const { data, meta } = await getAllCategories();
    console.log(meta,data,"data")
  return (
    <div>
      <ManageCategories  categories={data }/>
    </div>
  );
};

export default ProductCategoryPage;
