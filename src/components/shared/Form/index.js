import  React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GET_RELATED_TOPICS } from '../../../queries/topics';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';



// hooks directory
function useRelatedTopic(controlledTopic = '') {
    const [topic, setTopic] = useState(controlledTopic);
    const [results, setResults] = useState({relatedTopics: []});

    let {loading} = useQuery(GET_RELATED_TOPICS, {
                variables: { name: topic },
                onCompleted: ({ topic }) => {
                    if (topic?.relatedTopics) {
                        setResults({
                            ...topic,
                            relatedTopics: topic.relatedTopics.map(item => ({ label: item.name, ...item }))
                        })
                    }
                }
        })

    return {topic, setTopic, ...results, loading}
}

// components directory
function RelatedTopic({topic}) {
    const {stargazerCount} = useRelatedTopic(topic);
    return (
        <div>
            {topic && topic }
            {stargazerCount && stargazerCount}
        </div>
    )
}

export default function Form() {
    const { relatedTopics, loading, setTopic, stargazerCount } = useRelatedTopic()
    const handleChange = e => setTopic(e.target.value);

    return (
        <div  style={{width: 400}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={relatedTopics}
                sx={{ width: 300}}
                renderInput={(params) => <TextField {...params} label="Search" onChange={handleChange}/>}
            />
             <Card sx={{ minWidth: 275, marginTop: 14 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                                    {stargazerCount}
                                    {relatedTopics && !loading &&
                                relatedTopics.map(item => <RelatedTopic topic={item.name} />)
                        }
                    </Typography>
                </CardContent>
            </Card>
        </div>
  );
}
