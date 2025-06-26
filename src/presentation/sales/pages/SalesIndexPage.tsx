import CustomerProductCategories from "@/presentation/sales/components/CustomerProductCategories.tsx";
import CustomerProducts from "@/presentation/sales/components/CustomerProducts.tsx";
import CustomerCheckout from "@/presentation/sales/components/CustomerCheckout.tsx";
import CustomerCartHeader from "@/presentation/sales/components/CustomerCartHeader.tsx";

function SalesIndexPage() {

    return (
        <div className="grid grid-cols-3 gap-2 h-full bg-[#f8f3f9]">

            <div className="rounded-lg h-full space-y-4 overflow-y-auto col-span-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">

                {/* Categories Section*/}
                <CustomerProductCategories />
                {/* End of Categories Section*/}

                {/* Products Section   */}
                <CustomerProducts />

                {/* End of Products Section   */}

            </div>

            <div className="bg-white p-5 rounded-lg h-full space-y-4 overflow-y-auto">

                <CustomerCartHeader />

                <CustomerCheckout />

            </div>

        </div>
    )
}

export default SalesIndexPage