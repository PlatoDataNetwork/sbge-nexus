import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, DollarSign, Building2, Calendar } from "lucide-react";
import { memo } from 'react';

// Static data moved outside component to prevent recreation on each render
const caseStudyData = {
  totalFacilities: 6,
  totalSqft: "335,000",
  totalUnits: "4,700",
  developmentCost: "$46.5M",
  salePrice: "$100M",
  avgLeveredIRR: "33.79%",
  avgLeveredMOIC: "34.00X",
  unlEveredIRR: "17.14%",
  unleveredMOIC: "2.94X"
};

const facilities = [
  {
    location: "3322 Hudson Avenue, Union City, NJ",
    basis: "$11.7M",
    year: "2014",
    sale: "$28.5M",
    saleYear: "2024",
    irr: "16.69% / 29.40%",
    cashOnCash: "13.00%"
  },
  {
    location: "190 Baldwin Avenue, Jersey City, NJ",
    basis: "$7.6M",
    year: "2014",
    sale: "$21.6M",
    saleYear: "2024",
    irr: "18.72% / 48.92%",
    cashOnCash: "14.38%"
  },
  {
    location: "315 Coles Street, Jersey City, NJ",
    basis: "$4.5M",
    year: "2014",
    sale: "$13.0M",
    saleYear: "2024",
    irr: "18.26% / 32.06%",
    cashOnCash: "12.74%"
  },
  {
    location: "200 Mt. Pleasant Avenue, Newark, NJ",
    basis: "$6.3M",
    year: "2014",
    sale: "$17.8M",
    saleYear: "2024",
    irr: "18.78% / 32.80%",
    cashOnCash: "15.44%"
  },
  {
    location: "123 W Tryon Avenue, Teaneck, NJ",
    basis: "$9.6M",
    year: "2022",
    sale: "$11.2M",
    saleYear: "2024",
    irr: "17.42% / 52.39%",
    cashOnCash: "7.83%"
  },
  {
    location: "170 River Drive, Garfield, NJ",
    basis: "$6.8M",
    year: "2018/19",
    sale: "$7.95M",
    saleYear: "2024",
    irr: "4.92%",
    cashOnCash: "4.68%"
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-muted/50 to-transparent border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/investor-portal")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Investor Portal
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">StorageBlue Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            In March 2024, StorageBlue sold 6 of its storage facilities sourced, developed and managed by StorageBlue
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{caseStudyData.developmentCost}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sale Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{caseStudyData.salePrice}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Number of Facilities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold">{caseStudyData.totalFacilities}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">SOLD</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Levered IRR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{caseStudyData.avgLeveredIRR}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Levered MOIC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{caseStudyData.avgLeveredMOIC}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Unlevered IRR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">17.4%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Unlevered MOIC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2.94x</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Facilities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Portfolio Sale Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>{facility.location}</span>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Basis ({facility.year})</p>
                      <p className="text-xl font-bold">{facility.basis}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Sale ({facility.saleYear})</p>
                      <p className="text-xl font-bold text-primary">{facility.sale}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">IRR (Unlevered / Levered)</span>
                      <Badge variant="secondary">{facility.irr}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">2023 Cash on Cash</span>
                      <Badge variant="outline">{facility.cashOnCash}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default memo(CaseStudies);
