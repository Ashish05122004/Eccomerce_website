import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ModalSection() {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({ name: "", address: "", pin: "", mobile: "" });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
    function onCloseModal() {
        setOpenModal(false);
        setFormData({ name: "", address: "", pin: "", mobile: "" });
    }
    const orderHandler = (e) => {
        e.preventDefault();
        if (!formData.name && !formData.address && !formData.pin && !formData.mobile) {
            toast.error('Please fill all fields');
        }
        else{
            toast.success('Order placed successfully');
            onCloseModal();
        }
    }

    return (
        <>
            <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={() => setOpenModal(true)}>CHECKOUT</button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="Your Full Address" />
                            </div>
                            <TextInput
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="pin" value="Your Pin Code" />
                            </div>
                            <TextInput
                                name="pin"
                                id="pin"
                                value={formData.pin}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="mobile" value="Your Mobile Number" />
                            </div>
                            <TextInput
                                name="mobile"
                                id="mobile"
                                value={formData.mobile}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Button className="w-full"
                                onClick={orderHandler}
                            >Order Now</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
