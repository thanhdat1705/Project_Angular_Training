import { LineChartDataModel, PieChartDataModel, DonutChartDataModel } from './../models/chart-model';
export const dataChartRevenueByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        200000, 100000, 300000, 250000, 500000, 350000, 330000
      ],
      label: "Revenue"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartRevenueByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        2500000, 1800000, 3300000, 2500000, 4000000, 3500000, 3209900
      ],
      label: "Revenue"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartCostByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        500000, 100000, 300000, 250000, 400000, 500000, 209900
      ],
      label: "Cost"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartCostByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        7500000, 1000000, 4300000, 5200000, 400000, 500000, 4000000
      ],
      label: "Cost"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartProfitByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        100000, 200000, 300000, 250000, 400000, 500000, 605000
      ],
      label: "Profit"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartProfitByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        7000000, 6000000, 4300000, 6200000, 420000, 5500000, 4500000
      ],
      label: "Profit"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartNumberBookingByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        20, 30, 15, 10, 5, 17, 25
      ],
      label: "Number Of Bookings"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartNumberBookingByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        234, 300, 100, 125, 225, 321, 222
      ],
      label: "Number Of Bookings"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartNumberNewCustomerByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        20, 30, 15, 10, 5, 17, 25
      ],
      label: "Number Of New Customer"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartNumberNewCustomerByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        234, 300, 100, 125, 225, 321, 222
      ],
      label: "Number Of New Customer"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartNumberGuestByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        20, 30, 15, 10, 5, 17, 25
      ],
      label: "Number Of Guest"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartNumberGuestByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        234, 300, 100, 125, 225, 321, 222
      ],
      label: "Number Of Guest"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartNumberNewStoreByDay: LineChartDataModel = {
  dataSets: [
    {
      data: [
        5, 2, 10, 10, 5, 12, 22
      ],
      label: "Number Of New Store"
    }
  ],
  chartLabel: [
    "14-10", "15-10", "16-10", "17-10", "18-10", "19-10", "20-10"
  ]
};
export const dataChartNumberNewStoreByMonth: LineChartDataModel = {
  dataSets: [
    {
      data: [
        23, 30, 10, 15, 22, 32, 22
      ],
      label: "Number Of New Store"
    }
  ],
  chartLabel: [
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
  ]
};
export const dataChartNumberStoreType: DonutChartDataModel = {
  dataSets: [
    134, 300, 200
  ],
  chartLabel: [
    "Woman Store", "Man Store", "Both"
  ]
};
export const dataChartNumberCheckoutByCategory: PieChartDataModel = {
  dataSets: [
    134, 300
  ],
  chartLabel: [
    "Woman Services", "Man Services"
  ]
};
export const dataChartNumberAccount: PieChartDataModel = {
  dataSets: [
    40, 200, 396
  ],
  chartLabel: [
    "Administrator", "Store Owner", "Customer"
  ]
};
export const statisticsBys = [
  { id: 0, display: 'Daily' },
  { id: 1, display: 'Monthly' }
];
