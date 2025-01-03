import axios from "axios";
import { uuidv8 } from "uuid-v8";

const token = process.env.TOKEN;

export default async function createInvoices(req, res) {
  const randomNumberBetween10and100000 = Math.floor(
    Math.random() * (100000 - 10 + 1) + 10
  );

  const payload = (uuid, next = 0) => ({
    invoice: {
      deposit_percentage: null,
      due_offset_days: 30,
      estimateid: null,
      highlight_string: null,
      sender_name: null,
      invoiceid: null,
      invoice_client_id: null,
      series: null,
      language: "en-gb",
      sales_type: "credit",
      uuid: uuid,
      lock_status: null,
      city: "",
      country: "United Kingdom",
      create_date: "2025-01-03",
      currency_code: "GBP",
      discount_value: 0,
      fname: "Debug",
      lname: "Client",
      notes: null,
      invoice_number: randomNumberBetween10and100000 + next,
      organization: "",
      code: "",
      po_number: null,
      province: "",
      street: "",
      street2: "",
      template: "clean-grouped",
      terms: null,
      payment_details: null,
      vat_name: "",
      vat_number: "",
      allowed_gateway_info: null,
      attachments: [],
      contacts: [
        {
          contactid: "-1",
        },
      ],
      direct_links: [],
      customerid: "670209",
      branch: null,
      async_invoice_profile: null,
      late_fee: {
        compounded_taxes: false,
        days: 30,
        enabled: false,
        first_tax_name: null,
        first_tax_percent: null,
        repeat: false,
        second_tax_name: null,
        second_tax_percent: null,
        type: "percent",
        calculation_type: "total",
        value: 10,
      },
      late_reminders: [],
      lines: [
        {
          modern_project_id: null,
          retainer_id: null,
          retainer_period_id: null,
          domain: null,
          product_code: null,
          tax_rule_code: null,
          unit_code: null,
          amount: {
            amount: "44",
            code: "GBP",
          },
          description: "",
          expenseid: null,
          taxName1: null,
          taxAmount1: 0,
          name: "debug",
          qty: 1,
          taxName2: null,
          taxAmount2: 0,
          compounded_tax: false,
          type: null,
          unit_cost: {
            amount: "44",
            code: "GBP",
          },
          invoiceid: null,
          modern_time_entries: [],
        },
      ],
      owner: null,
      presentation: {
        theme_font_name: "modern",
        theme_primary_color: "#4F697A",
        theme_layout: "simple",
        date_format: "dd/mm/yyyy",
        image_banner_position_y: 0,
        image_logo_src: null,
        image_banner_src: null,
        display_sender_business_name: true,
        display_sender_address: true,
        display_sender_phone_number: true,
        display_sender_tax_number: true,
      },
      transactioninvoiceid: null,
      payment_schedule: [],
      invoice_stamp: null,
    },
  });

  const headers = {
    "sec-ch-ua-platform": "macOS",
    Authorization: `Bearer ${token}`,
    Referer: "https://my.freshbooks.com/",
    "X-Correlation-ID": "70276585539127",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "X-API-VERSION": "2023-02-20",
    "sec-ch-ua-mobile": "?0",
    "X-Account-ID": "XynAvX",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "content-type": "application/json; charset=utf-8",
    "X-Fb-Support": true,
  };

  const params = {
    "include%5B%5D": "attachments",
    "include%5B%5D": "audit_logs",
    "include%5B%5D": "client_audits",
    "include%5B%5D": "contacts",
    "include%5B%5D": "estimate",
    "include%5B%5D": "invoice_customized_email",
    "include%5B%5D": "invoice_profile",
    "include%5B%5D": "late_fee",
    "include%5B%5D": "late_reminders",
    "include%5B%5D": "lines",
    "include%5B%5D": "owner",
    "include%5B%5D": "payment_schedule",
    "include%5B%5D": "presentation",
    "include%5B%5D": "system",
    "include%5B%5D": "project_total_amounts",
  };

  const url =
    "https://api.freshbooks.com/accounting/account/XynAvX/invoices/invoices";

  const responses = [];

  await Promise.all([
    axios.post(url, payload(uuidv8()), { headers, params }),
    axios.post(url, payload(uuidv8(), 1), { headers, params }),
    axios.post(url, payload(uuidv8(), 2), { headers, params }),
    axios.post(url, payload(uuidv8(), 3), { headers, params }),
    axios.post(url, payload(uuidv8(), 4), { headers, params }),
    axios.post(url, payload(uuidv8(), 5), { headers, params }),
    axios.post(url, payload(uuidv8(), 6), { headers, params }),
    axios.post(url, payload(uuidv8(), 7), { headers, params }),
    axios.post(url, payload(uuidv8(), 8), { headers, params }),
    axios.post(url, payload(uuidv8(), 9), { headers, params }),
    axios.post(url, payload(uuidv8(), 10), { headers, params }),
    axios.post(url, payload(uuidv8(), 11), { headers, params }),
    axios.post(url, payload(uuidv8(), 12), { headers, params }),
    axios.post(url, payload(uuidv8(), 13), { headers, params }),
    axios.post(url, payload(uuidv8(), 14), { headers, params }),
    axios.post(url, payload(uuidv8(), 15), { headers, params }),
    axios.post(url, payload(uuidv8(), 16), { headers, params }),
    axios.post(url, payload(uuidv8(), 17), { headers, params }),
    axios.post(url, payload(uuidv8(), 18), { headers, params }),
    axios.post(url, payload(uuidv8(), 19), { headers, params }),
  ])
    .then((arrayReponses) => {
      arrayReponses.forEach((response) => {
        responses.push({
          uuid: response.data.response.result.invoice.uuid,
          invoiceId: response.data.response.result.invoice.invoiceid,
          created_at: response.data.response.result.invoice.created_at,
        });
      });
    })
    .catch((error) => {
      responses.push({ error: error.response.data });
      console.log("error", JSON.stringify(error.response.data));
    });

  console.log(responses);
  res.json({ responses });
}
