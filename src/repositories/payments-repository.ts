import { Payment } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentByTicketId(ticketId: number) {
  const result = await prisma.payment.findFirst({
    where: { ticketId },
  });
  return result;
}

async function createPayment(ticketId: number, params: PaymentParams) {
  const result = await prisma.payment.create({
    data: {
      ticketId,
      ...params,
    },
  });

  return result;
}

export type PaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;

export const paymentsRepository = {
  findPaymentByTicketId,
  createPayment,
};
