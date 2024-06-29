import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import axios from 'axios';
import { getOrders } from '../api';
import styled from "styled-components";

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;

const OrderPage = ({ userId }) => {
  let [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOrdersU = async () => {
    setLoading(true);
    const token = localStorage.getItem("bito-app-token");
    try {
      await getOrders(token)
        .then((res) => {
            setOrders(res.data.order);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("Sorry, something went wrong:", err);
        });
    } catch (err) {
      setLoading(false);
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    getOrdersU();
  }, [userId]);
console.log(orders)
  if (loading) {
    return <CircularProgress />;
}
console.log(orders)

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      <Grid container spacing={3}>
        {orders?.map((order) => (
          <Grid item xs={12} key={order._id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Order ID: {order._id}
                </Typography>
                <Typography>
                  Total Amount: ₹{order.total_amount}
                </Typography>
                <Typography>
                  Address: {order.address}
                </Typography>
                <Typography>
                  Status: {order.status}
                </Typography>
                <Typography>
                  Created At: {new Date(order.createdAt).toLocaleString()}
                </Typography>
                <Typography variant="subtitle1">
                  Products:
                </Typography>
                <List>
                  {order.products.map((product) => (
                    <ListItem key={product._id}>
                      <ListItemText primary={`Product ID: ${product.product} - Quantity: ${product.quantity}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

//     <Container>
//     <Section>
//       <Title>Your Favourites</Title>
//       <CardWrapper>
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <>
//             {orders?.map((order) => (
//              <p>{order.address}</p>
//             ))}
//           </>
//         )}
//       </CardWrapper>
//     </Section>
//   </Container>
    // <div>sd</div>
  );

};

export default OrderPage;
