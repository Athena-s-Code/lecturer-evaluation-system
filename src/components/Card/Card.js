import React from 'react'
import { Card,Image } from 'antd';
const { Meta } = Card;

const UserCard = () => {
  return (
    <Card
style={{
  marginTop: 16,
}}
>
<Meta
  avatar={<Image
    width={100}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />}
  title="Card title"
  description="This is the description"
/>
</Card>
  )
}

export default UserCard;