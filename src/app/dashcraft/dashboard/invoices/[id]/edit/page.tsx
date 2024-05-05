import Form from "@/components/dashcraft/invoices/edit-form";
import Breadcrumbs from "@/components/dashcraft/invoices/breadcrumbs";
import { fetchCustomers, fetchInvoiceById } from "@/lib/data";
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashcraft/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashcraft/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
