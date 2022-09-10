import { AvailableProperty } from '../../types';

/**
 * Checks if a stylesheet is not from a third party
 * @param styleSheet The stylesheet
 */
function isSameDomain(styleSheet: CSSStyleSheet): boolean {
	if (!styleSheet.href) return true;
	return styleSheet.href.indexOf(window.location.origin) === 0;
}

/**
 * Checks if a CSS rule is a style rule
 * @param rule The rule
 */
function isStyleRule(rule: CSSRule): boolean {
	return rule.STYLE_RULE === 1;
}

/**
 * Gets all the available custom properties
 */
function getCSSCustomProperties(): { [key: string]: string } {
	const allCustomProperties = {};

	[...document.styleSheets].filter(isSameDomain).forEach(stylesheet => {
		for (const rule of stylesheet.cssRules as unknown as CSSStyleRule[]) {
			if (!isStyleRule(rule) || !rule.style) continue;

			for (const entry of [...rule.style]) {
				const property = entry.trim();

				if (property.indexOf('--') === 0) {
					const propertyName = property.substring(2, property.length);
					const propertyValue = rule.style.getPropertyValue(property).trim();

					Object.assign(allCustomProperties, { [propertyName]: propertyValue });

					// The regular expression searches any valid CSS color
					if (propertyValue.match(/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/i)) {
						Object.assign(allCustomProperties, { [propertyName]: propertyValue });
					}
				}
			}
		}
	});

	return allCustomProperties;
}

export function getCustomProperty(name: AvailableProperty): string {
	const properties = getCSSCustomProperties();
	return properties[name];
}

export function updateCustomProperty(name: AvailableProperty, value: string): void {
	document.documentElement.style.setProperty(`--${name}`, value);
}
