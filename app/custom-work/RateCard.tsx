"use client";

// @ts-expect-error CDS type declarations reference CSS files not present in dist/types
import { Tabs, Icon } from "@empac/cascadeds";
import type {
  RateTab,
  PriceGroup,
  ListBlock,
  CardGroup,
  IconCard,
  ScenarioGroup,
  Scenario,
  BuildingBlockTable,
  StepGroup,
} from "./content";
import { rateTabs } from "./content";
import styles from "./page.module.css";

function OfferCard({ offer }: { offer: PriceGroup["offers"][number] }) {
  return (
    <div className={styles.offerCard}>
      <div className={styles.offerHead}>
        <h4 className={styles.offerName}>{offer.name}</h4>
        <p className={styles.offerPrice}>
          {offer.price}
          {offer.priceNote && (
            <span className={styles.offerPriceNote}>{offer.priceNote}</span>
          )}
        </p>
      </div>
      <p className={styles.offerDesc}>{offer.desc}</p>
      {offer.note && <p className={styles.clarifier}>{offer.note}</p>}
      {offer.rangeAnchors && (
        <dl className={styles.anchors}>
          <div className={styles.anchorRow}>
            <dt className={styles.anchorLabel}>Low</dt>
            <dd className={styles.anchorText}>{offer.rangeAnchors.low}</dd>
          </div>
          <div className={styles.anchorRow}>
            <dt className={styles.anchorLabel}>High</dt>
            <dd className={styles.anchorText}>{offer.rangeAnchors.high}</dd>
          </div>
        </dl>
      )}
      {offer.includes && (
        <ul className={styles.checklist}>
          {offer.includes.map((item) => {
            const isCarryover = item.endsWith("plus:");
            return (
              <li
                key={item}
                className={`${styles.checkItem} ${
                  isCarryover ? styles.checkCarryover : ""
                }`}
              >
                {!isCarryover && (
                  <span className={styles.checkMark} aria-hidden="true">
                    ✓
                  </span>
                )}
                {item}
              </li>
            );
          })}
        </ul>
      )}
      {offer.bestFor && (
        <p className={styles.bestFor}>
          <span className={styles.bestForLabel}>Best for</span> {offer.bestFor}
        </p>
      )}
      {offer.financing && (
        <p className={styles.offerFinancing}>{offer.financing}</p>
      )}
    </div>
  );
}

function PriceGroupBlock({ group }: { group: PriceGroup }) {
  return (
    <div className={styles.priceGroup}>
      {group.title && <h3 className={styles.groupTitle}>{group.title}</h3>}
      <div className={styles.offerGrid}>
        {group.offers.map((offer) => (
          <OfferCard key={offer.name} offer={offer} />
        ))}
      </div>
      {group.note && <p className={styles.groupNote}>{group.note}</p>}
    </div>
  );
}

function IconCardView({ card }: { card: IconCard }) {
  return (
    <div className={styles.iconCard}>
      {card.icon && (
        <span className={styles.iconBadge}>
          <Icon name={card.icon} size="24" />
        </span>
      )}
      <h4 className={styles.iconCardTitle}>{card.title}</h4>
      <p className={styles.iconCardDesc}>{card.desc}</p>
      {card.note && <p className={styles.clarifier}>{card.note}</p>}
    </div>
  );
}

function CardGroupBlock({ group }: { group: CardGroup }) {
  return (
    <div className={styles.cardGroup}>
      {group.label && <h3 className={styles.groupTitle}>{group.label}</h3>}
      <div
        className={`${styles.cardGrid} ${group.threeUp ? styles.threeUp : ""}`}
      >
        {group.cards.map((card) => (
          <IconCardView key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

function ListBlockBlock({ block }: { block: ListBlock }) {
  return (
    <div className={styles.listBlock}>
      <h3 className={styles.listLabel}>{block.label}</h3>
      <ul className={styles.list}>
        {block.items.map((item) => (
          <li key={item} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <div className={styles.scenarioCard}>
      <h4 className={styles.scenarioTitle}>{scenario.title}</h4>
      {scenario.subtitle && (
        <p className={styles.scenarioSubtitle}>{scenario.subtitle}</p>
      )}
      {scenario.base && (
        <p className={styles.scenarioBase}>
          <span className={styles.scenarioBaseLabel}>Base</span> {scenario.base}
        </p>
      )}
      {scenario.deliverables && (
        <ul className={styles.list}>
          {scenario.deliverables.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {scenario.why && <p className={styles.scenarioWhy}>{scenario.why}</p>}
      {scenario.summary && (
        <p className={styles.scenarioSummary}>{scenario.summary}</p>
      )}
    </div>
  );
}

function ScenarioGroupBlock({ group }: { group: ScenarioGroup }) {
  return (
    <div className={styles.scenarioGroup}>
      {group.label && <h3 className={styles.groupTitle}>{group.label}</h3>}
      {group.intro && <p className={styles.sectionIntro}>{group.intro}</p>}
      <div
        className={`${styles.scenarioGrid} ${
          group.threeUp ? styles.threeUp : ""
        }`}
      >
        {group.scenarios.map((scenario) => (
          <ScenarioCard key={scenario.title} scenario={scenario} />
        ))}
      </div>
    </div>
  );
}

function BuildingBlocksBlock({ table }: { table: BuildingBlockTable }) {
  return (
    <div className={styles.buildingBlocks}>
      {table.label && <h3 className={styles.groupTitle}>{table.label}</h3>}
      {table.intro && <p className={styles.sectionIntro}>{table.intro}</p>}
      <div className={styles.tableWrap}>
        <table className={styles.blockTable}>
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col} className={styles.blockTh}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]}>
                <td className={styles.blockName}>{row[0]}</td>
                <td className={styles.blockCell}>{row[1]}</td>
                <td className={styles.blockPricing}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepGroupBlock({ group }: { group: StepGroup }) {
  return (
    <div className={styles.stepGroup}>
      {group.label && <h3 className={styles.groupTitle}>{group.label}</h3>}
      <ol className={`${styles.steps} ${group.threeUp ? styles.threeUp : ""}`}>
        {group.steps.map((step, i) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <div className={styles.stepBody}>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function TabPanel({ tab }: { tab: RateTab }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelLead}>
        {tab.empac && (
          <span className={styles.empacTag}>
            {tab.empacLabel ?? "Built by Empac"}
          </span>
        )}
        <p className={styles.lead}>{tab.lead}</p>
      </div>

      {tab.priceGroups?.map((group, i) => (
        <PriceGroupBlock key={group.title ?? i} group={group} />
      ))}

      {tab.buildingBlocks && <BuildingBlocksBlock table={tab.buildingBlocks} />}

      {tab.cardGroups?.map((group, i) => (
        <CardGroupBlock key={group.label ?? i} group={group} />
      ))}

      {tab.scenarioGroups?.map((group, i) => (
        <ScenarioGroupBlock key={group.label ?? i} group={group} />
      ))}

      {tab.stepGroup && <StepGroupBlock group={tab.stepGroup} />}

      {tab.lists?.map((block) => (
        <ListBlockBlock key={block.label} block={block} />
      ))}

      {tab.note && (
        <aside className={styles.noteStrip}>
          <p className={styles.noteText}>{tab.note}</p>
        </aside>
      )}
    </div>
  );
}

export function RateCard() {
  const tabs = rateTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: <TabPanel tab={tab} />,
  }));

  return (
    <Tabs
      tabs={tabs}
      defaultActiveTab="design"
      variant="underline"
      size="large"
      className={styles.tabs}
    />
  );
}
