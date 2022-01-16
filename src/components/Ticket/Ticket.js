import React from 'react'
import { StyledTicket } from './TicketStyled'

const Ticket = ({ticket_price, ticket_id}) => {
    return (
        <StyledTicket>
            <>
                <h1>ID de tu compra: {ticket_id}</h1>
                <br />
                <h1>Total: ${ticket_price}</h1>
            </>
        </StyledTicket>
    )
}

export default Ticket
