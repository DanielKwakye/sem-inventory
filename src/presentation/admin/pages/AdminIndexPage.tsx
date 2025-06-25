import AdminProductCategories from "@/presentation/admin/components/AdminProductCategories.tsx";
import AdminProducts from "@/presentation/admin/components/AdminProducts.tsx";
import AdminProductDetail from "@/presentation/admin/components/AdminProductDetail.tsx";

function AdminIndexPage() {
    return (
        <div className="columns-3 gap-2 h-full">
            {/*  Categories section  */}
            <AdminProductCategories />
            {/*  End of Categories section  */}

            {/*  Products section  */}
            <AdminProducts />
            {/*  End of Products section  */}

            {/*  Product Details section  */}
            <AdminProductDetail />
            {/*  End of Product Details section  */}
        </div>
    )
}

export default AdminIndexPage