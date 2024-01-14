import Editor, { useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react';
import rosePineMoonTheme from './theme';

const log = `2024/01/11 22:25:54 > steve(12345678-1234-5678-abcd-ef1234567801) snake_case at Test because VIEWING
2024/01/11 22:25:54 > Herobrine(12345678-1234-5678-abcd-ef1234567801) camelCase at Make because GIVING
2024/01/11 22:25:54 > _Alex_(12345678-1234-5678-abcd-ef1234567801) string at Show because OFFERING
`

const LogViewer = () => {
    const monaco = useMonaco();

    useEffect(() => {
        if (!monaco) return;

        monaco.editor.defineTheme(
            'rosePineMoon',
            rosePineMoonTheme
        );

        monaco.languages.register({ id: 'log' });

        monaco.languages.setMonarchTokensProvider('log', {
            defaultToken: '',
            keywords: [
                'at',
                'because'
            ],

            tokenizer: {
                root: [
                    [/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/, "variable.parameter"],
                    [/(\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2})/, "constant.numeric"],
                    [/\b(at|because)\b/, 'keyword'],
                    [/\b[a-zA-Z_]\w*\b(?=\s*\()/, 'support.function'],
                    [/\b[A-Z]\w*\b/, 'entity.name.tag'], // upper case
                    [/\b[a-z]\w*\b/, 'string'], // lower case
                    [/\b[a-zA-Z][a-z0-9]*([A-Z][a-z0-9]*)*\b/, 'string'], // camelCase 
                ],

            }
        })

        monaco.editor.setTheme('rosePineMoon')
    }, [monaco])

    return <Editor
        height="90vh"
        theme='rosePineMoon'
        language='log'
        defaultValue={log}
        options={{
            readOnly: true,
            minimap: {
                enabled: false
            },

        }}
    />
}

export default LogViewer;