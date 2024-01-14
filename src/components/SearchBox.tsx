import { useState, useEffect, useRef } from 'react'
import Tags from '@yaireo/tagify/dist/react.tagify'

const baseTagifySettings = {
    placeholder: "검색할 태그를 입력하세요",
    dropdown: {
        enabled: 0
    }
}

const SearchBox = () => {
    const tagifyRef1 = useRef<Tagify>()

    const [tagifySettings, setTagifySettings] = useState([])
    const [tagifyProps, setTagifyProps] = useState({})

    useEffect(() => {
        setTagifyProps((lastProps) => ({
            ...lastProps,
            whitelist: ["foo", "bar", "baz"],
            showFilteredDropdown: "a",
            loading: false
        }))
    }, [])


    // merged tagify settings (static & dynamic)
    const settings = {
        ...baseTagifySettings,
        ...tagifySettings
    }

    // access Tagify internal methods example:
    const clearAll = () => {
        tagifyRef1.current && tagifyRef1.current.removeAllTags()
    }

    return (
        <>
            <Tags
                tagifyRef={tagifyRef1}
                settings={settings}
                autoFocus={true}
                {...tagifyProps}
            />
            <button className="clearAllBtn" onClick={clearAll}>
                Clear All
            </button>
        </>
    )
}




export default SearchBox;