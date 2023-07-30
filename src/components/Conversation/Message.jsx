import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes'

const Message = ({menu=true}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el,id)=>{
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} key={id} />
              
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMsg el={el} key={id} menu={menu} />
                case 'doc':
                  return <DocMsg el={el} key={id} menu={menu} />
                case 'link':
                  return <LinkMsg el={el} key={id} menu={menu} /> 

                case 'reply':
                  return <ReplyMsg el={el} key={id} menu={menu} />

                default:
                  return <TextMsg el={el} key={id} menu={menu} />
              }
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  )
}

export default Message