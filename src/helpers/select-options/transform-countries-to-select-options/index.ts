import ISelect from '@components/ui/select/model'

export const transformCountriesToSelectOptions = (
    source: Record<string, string>
): ISelect.Option[] => {

    return Object.keys(source).map((key) => {
        return {
            value: key,
            label: source[key]
        }
    })
}
