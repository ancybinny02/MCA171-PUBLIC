from xsd_validator import XsdValidator

validator = XsdValidator('file.xsd')
validator.assert_valid('file.xml')