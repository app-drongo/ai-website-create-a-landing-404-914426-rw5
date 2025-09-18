'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Database,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Cloud,
  Users,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Database,
      title: 'SAP ERP Integration',
      description:
        'Seamlessly connect your SAP systems with third-party applications and cloud services.',
      badge: 'Core Service',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade security protocols ensuring your SAP data remains protected and compliant.',
      badge: 'Security',
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Instant data synchronization across all integrated systems with zero latency.',
      badge: 'Performance',
    },
    {
      icon: Globe,
      title: 'Multi-System Support',
      description:
        'Connect SAP with Salesforce, Microsoft, Oracle, and 200+ enterprise applications.',
      badge: 'Compatibility',
    },
    {
      icon: BarChart3,
      title: 'Advanced Monitoring',
      description:
        'Comprehensive dashboards and alerts to monitor integration health and performance.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description:
        'Tailored integration workflows designed specifically for your business processes.',
      badge: 'Customization',
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise',
      description:
        'Flexible deployment options supporting both cloud-based and on-premise SAP instances.',
      badge: 'Infrastructure',
    },
    {
      icon: Users,
      title: 'Expert Consulting',
      description: 'Dedicated SAP integration specialists with 15+ years of enterprise experience.',
      badge: 'Support',
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime SLA',
      description:
        'Guaranteed reliability with enterprise-grade infrastructure and 24/7 monitoring.',
      badge: 'Reliability',
    },
  ];

  const handleStartIntegration = () => {
    window.location.href = '/consultation';
  };

  const handleViewCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            SAP Integration Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Enterprise-Grade SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your business operations with our comprehensive SAP ERP integration platform,
            trusted by Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your SAP integration strategy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartIntegration}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Schedule Integration Consultation
            </button>
            <button
              onClick={handleViewCaseStudies}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
