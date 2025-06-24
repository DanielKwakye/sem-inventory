import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {PlusCircleIcon} from "lucide-react";

function AddNewProduct() {


    // const submitHandler = (data: ProductStockModel) => {
    //     const formData = new FormData();
    //
    // }

    return <Dialog>
        <form>
            <DialogTrigger asChild>
                <div className="flex py-2 px-3 bg-white rounded-full gap-2 items-center cursor-pointer">
                    <PlusCircleIcon size={14}/>
                    <span className="text-xs">Add new product</span>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new product</DialogTitle>
                    <DialogDescription>
                        create a new product and specify the quantity available
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">

                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="image">Product image</Label>
                        <Input id="image" type="file"/>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="title">Product name</Label>
                        <Input id="title" name="name" placeholder="eg. Black Iphone 16+"/>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="cost_price">Cost price</Label>
                        <Input type={"number"} id="cost_price" name="cost_price" placeholder={"eg. 21.00"}/>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="selling_price">Selling price</Label>
                        <Input type={"number"} id="selling_price" name="selling_price" placeholder={"eg. 29.99"}/>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="tax_value">Tax value ($)</Label>
                        <Input type={"number"} id="tax_value" name="tax_value" placeholder={"eg. 2.50"}/>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="tax_value">Discount (%)</Label>
                        <Input type={"number"} id="tax_value" name="tax_value" placeholder={"eg. 15.0"}/>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input type={"number"} id="quantity" name="quantity" placeholder={"eg. 15"}/>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </form>
    </Dialog>
}

export default AddNewProduct;
