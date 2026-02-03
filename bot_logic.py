def check_for_discount(days_until_expiry):
    # This is the creative feature: Early Bird Discount
    if days_until_expiry > 10:
        return "You qualify for a 15% Early Bird renewal discount!"
    else:
        return "Standard renewal rates apply."

# Example usage for the bot
print(check_for_discount(12))
