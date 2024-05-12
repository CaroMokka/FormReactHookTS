import { FormWrapper } from "./FormWrapper";

type AddressFormProps = {
    street: string
    city: string
    state: string
    zip: string
}

export function AddressForm({ street, city, state, zip }: AddressFormProps) {
    return (
        <>
            <FormWrapper title="Address">
            <label>Street</label>
            <input autoFocus required type="text" value={street} />
            <label>City</label>
            <input required type="text" value={city}/>
            <label>State</label>
            <input required type="text" value={state}/>
            <label>Zip</label>
            <input required type="text" value={zip} />
            </FormWrapper>
        </>
        )
}